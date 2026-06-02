// =============================================
// Middleware Authentification JWT
// =============================================
const jwt = require('jsonwebtoken');
const prisma = require('../utils/prisma');

// Vérifie que l'utilisateur est connecté
const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Token d\'authentification requis' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, email: true, name: true, role: true, isActive: true },
    });

    if (!user || !user.isActive) {
      return res.status(401).json({ error: 'Compte invalide ou désactivé' });
    }

    req.user = user;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Session expirée, reconnectez-vous' });
    }
    return res.status(401).json({ error: 'Token invalide' });
  }
};

// Vérifie les rôles autorisés
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Non authentifié' });
    }
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        error: 'Permissions insuffisantes pour cette action'
      });
    }
    next();
  };
};

// Raccourcis pratiques
const isAdmin = authorize('ADMIN', 'SUPER_ADMIN');
const isSuperAdmin = authorize('SUPER_ADMIN');
const isEditor = authorize('EDITOR', 'ADMIN', 'SUPER_ADMIN');

module.exports = { authenticate, authorize, isAdmin, isSuperAdmin, isEditor }; 