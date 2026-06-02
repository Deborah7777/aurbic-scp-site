// =============================================
// AURBIC SCP — Serveur Principal
// =============================================
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// =============================================
// SÉCURITÉ — Headers HTTP
// =============================================
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' }
}));

// =============================================
// CORS — Autorise uniquement votre frontend
// =============================================
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:3000',
    'http://localhost:3000',
    'http://localhost:5173',
  ],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// =============================================
// RATE LIMITING — Anti spam / attaque
// =============================================
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
  max: parseInt(process.env.RATE_LIMIT_MAX) || 100,
  message: { error: 'Trop de requêtes, réessayez dans 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', limiter);

// Rate limit strict pour l'authentification
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Trop de tentatives de connexion. Attendez 15 minutes.' },
});

// =============================================
// PARSERS
// =============================================
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// =============================================
// LOGS
// =============================================
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// =============================================
// FICHIERS STATIQUES (Images uploadées)
// =============================================
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// =============================================
// ROUTES API
// =============================================
const authRoutes      = require('./routes/auth.routes');
const projectRoutes   = require('./routes/projects.routes');
const articleRoutes   = require('./routes/articles.routes');
const contactRoutes   = require('./routes/contact.routes');
const devisRoutes     = require('./routes/devis.routes');
const testimonialRoutes = require('./routes/testimonials.routes');
const teamRoutes      = require('./routes/team.routes');
const uploadRoutes    = require('./routes/upload.routes');
const adminRoutes     = require('./routes/admin.routes');
const settingsRoutes  = require('./routes/settings.routes');

app.use('/api/auth',         authLimiter, authRoutes);
app.use('/api/projects',     projectRoutes);
app.use('/api/articles',     articleRoutes);
app.use('/api/contact',      contactRoutes);
app.use('/api/devis',        devisRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/team',         teamRoutes);
app.use('/api/upload',       uploadRoutes);
app.use('/api/admin',        adminRoutes);
app.use('/api/settings',     settingsRoutes);

// =============================================
// ROUTE SANTÉ (Health check)
// =============================================
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'AURBIC SCP API opérationnelle',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// =============================================
// ROUTE 404
// =============================================
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route introuvable' });
});

// =============================================
// GESTIONNAIRE D'ERREURS GLOBAL
// =============================================
app.use((err, req, res, next) => {
  console.error('Erreur serveur:', err);

  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ error: 'Non autorisé' });
  }
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({ error: 'Fichier trop volumineux (max 10 Mo)' });
  }

  res.status(err.status || 500).json({
    error: process.env.NODE_ENV === 'production'
      ? 'Erreur interne du serveur'
      : err.message,
  });
});

// =============================================
// DÉMARRAGE
// =============================================
app.listen(PORT, () => {
  console.log(`\n🏗️  AURBIC SCP API démarrée`);
  console.log(`📡  Port     : ${PORT}`);
  console.log(`🌍  Env      : ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗  URL      : http://localhost:${PORT}/api`);
  console.log(`✅  Santé    : http://localhost:${PORT}/api/health\n`);
});

module.exports = app;