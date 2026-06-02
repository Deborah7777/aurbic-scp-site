// =============================================
// Middleware Upload d'Images — Multer + Sharp
// =============================================
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Dossiers d'upload
const UPLOAD_DIRS = {
  projects:  path.join(__dirname, '../../uploads/projects'),
  articles:  path.join(__dirname, '../../uploads/articles'),
  team:      path.join(__dirname, '../../uploads/team'),
  partners:  path.join(__dirname, '../../uploads/partners'),
  general:   path.join(__dirname, '../../uploads/general'),
};

// Créer les dossiers s'ils n'existent pas
Object.values(UPLOAD_DIRS).forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// Stockage en mémoire (on traite avec Sharp avant de sauvegarder)
const storage = multer.memoryStorage();

// Filtre : uniquement les images
const fileFilter = (req, file, cb) => {
  const allowed = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Format non supporté. Utilisez JPG, PNG ou WebP.'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE) || 10 * 1024 * 1024,
  },
});

// Traitement de l'image avec Sharp (compression + redimensionnement)
const processImage = async (buffer, options = {}) => {
  const {
    width = 1920,
    height = null,
    quality = 85,
    format = 'webp',
  } = options;

  return sharp(buffer)
    .resize(width, height, { withoutEnlargement: true, fit: 'inside' })
    .webp({ quality })
    .toBuffer();
};

// Middleware de traitement post-upload
const handleImageUpload = (folder = 'general', options = {}) => {
  return async (req, res, next) => {
    if (!req.file && !req.files) return next();

    const dir = UPLOAD_DIRS[folder] || UPLOAD_DIRS.general;
    const baseUrl = `${req.protocol}://${req.get('host')}`;

    try {
      // Fichier unique
      if (req.file) {
        const filename = `${uuidv4()}.webp`;
        const filepath = path.join(dir, filename);
        const processed = await processImage(req.file.buffer, options);
        fs.writeFileSync(filepath, processed);
        req.file.url = `${baseUrl}/uploads/${folder}/${filename}`;
        req.file.filename = filename;
      }

      // Plusieurs fichiers
      if (req.files && Array.isArray(req.files)) {
        for (const file of req.files) {
          const filename = `${uuidv4()}.webp`;
          const filepath = path.join(dir, filename);
          const processed = await processImage(file.buffer, options);
          fs.writeFileSync(filepath, processed);
          file.url = `${baseUrl}/uploads/${folder}/${filename}`;
          file.filename = filename;
        }
      }

      next();
    } catch (err) {
      next(err);
    }
  };
};

// Supprime un fichier image du serveur
const deleteImage = (url) => {
  if (!url) return;
  try {
    const filename = path.basename(url);
    const folders = Object.values(UPLOAD_DIRS);
    for (const folder of folders) {
      const filepath = path.join(folder, filename);
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
        break;
      }
    }
  } catch (err) {
    console.error('Erreur suppression image:', err);
  }
};

module.exports = { upload, handleImageUpload, deleteImage, UPLOAD_DIRS };