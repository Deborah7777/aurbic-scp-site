// =============================================
// Service Email — Nodemailer
// =============================================
const nodemailer = require('nodemailer');

// Création du transporteur email
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT) || 587,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: { rejectUnauthorized: false },
  });
};

// Template HTML de base (cohérent avec la charte AURBIC)
const emailTemplate = (title, content) => `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <style>
    body { margin: 0; padding: 0; background: #FAF8F5; font-family: Georgia, serif; }
    .wrapper { max-width: 620px; margin: 0 auto; }
    .header { background: #3C2A21; padding: 32px 40px; }
    .logo { color: #F4EBD0; font-size: 20px; letter-spacing: 4px; text-transform: uppercase; }
    .logo span { display: block; font-family: Arial, sans-serif; font-size: 9px; letter-spacing: 3px; color: #A15843; margin-top: 4px; }
    .body { background: #ffffff; padding: 40px; border-left: 1px solid #e8e0d5; border-right: 1px solid #e8e0d5; }
    .title { color: #3C2A21; font-size: 22px; font-weight: 400; margin-bottom: 24px; }
    .content { color: #5C3D2E; font-size: 14px; line-height: 1.8; }
    .field { margin-bottom: 16px; padding: 14px 16px; background: #FAF8F5; border-left: 3px solid #8B4513; }
    .field-label { font-family: Arial, sans-serif; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #A15843; margin-bottom: 4px; }
    .field-value { color: #3C2A21; font-size: 14px; }
    .footer { background: #3C2A21; padding: 24px 40px; text-align: center; }
    .footer p { color: rgba(244,235,208,0.4); font-family: Arial, sans-serif; font-size: 11px; margin: 0; }
    .divider { border: none; border-top: 1px solid #e8e0d5; margin: 24px 0; }
    .badge { display: inline-block; background: #8B4513; color: #F4EBD0; font-family: Arial, sans-serif; font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; padding: 6px 14px; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <div class="logo">AURBIC SCP <span>Architecture · Urbanisme · Ingénierie</span></div>
    </div>
    <div class="body">
      <h1 class="title">${title}</h1>
      <div class="content">${content}</div>
    </div>
    <div class="footer">
      <p>AURBIC SCP — Niamey, Niger · contact@aurbic.ne</p>
      <p style="margin-top:8px">© ${new Date().getFullYear()} AURBIC SCP. Tous droits réservés.</p>
    </div>
  </div>
</body>
</html>
`;

// =============================================
// ENVOI D'EMAILS — Fonctions métier
// =============================================

// Email de notification pour un nouveau contact
const sendContactNotification = async (contact) => {
  const transporter = createTransporter();
  const content = `
    <div class="badge">Nouveau message</div>
    <hr class="divider" />
    <div class="field">
      <div class="field-label">Nom complet</div>
      <div class="field-value">${contact.name}</div>
    </div>
    <div class="field">
      <div class="field-label">Email</div>
      <div class="field-value">${contact.email}</div>
    </div>
    ${contact.phone ? `<div class="field"><div class="field-label">Téléphone</div><div class="field-value">${contact.phone}</div></div>` : ''}
    ${contact.company ? `<div class="field"><div class="field-label">Société</div><div class="field-value">${contact.company}</div></div>` : ''}
    <div class="field">
      <div class="field-label">Sujet</div>
      <div class="field-value">${contact.subject}</div>
    </div>
    <div class="field">
      <div class="field-label">Message</div>
      <div class="field-value">${contact.message.replace(/\n/g, '<br/>')}</div>
    </div>
    <hr class="divider" />
    <p style="font-size:12px;color:#888">Reçu le ${new Date().toLocaleString('fr-FR')} · Répondez directement à ${contact.email}</p>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_RECIPIENT,
    replyTo: contact.email,
    subject: `[AURBIC] Nouveau message : ${contact.subject}`,
    html: emailTemplate(`Message de ${contact.name}`, content),
  });
};

// Email de confirmation au visiteur qui écrit
const sendContactConfirmation = async (contact) => {
  const transporter = createTransporter();
  const content = `
    <p>Bonjour <strong>${contact.name}</strong>,</p>
    <p>Nous avons bien reçu votre message et nous vous remercions de l'intérêt que vous portez au Cabinet AURBIC SCP.</p>
    <p>Notre équipe reviendra vers vous dans les <strong>24 heures ouvrées</strong>.</p>
    <hr class="divider" />
    <p style="font-size:13px;color:#888">Récapitulatif de votre message :</p>
    <div class="field">
      <div class="field-label">Sujet</div>
      <div class="field-value">${contact.subject}</div>
    </div>
    <div class="field">
      <div class="field-label">Message</div>
      <div class="field-value">${contact.message.substring(0, 200)}${contact.message.length > 200 ? '...' : ''}</div>
    </div>
    <hr class="divider" />
    <p>Cordialement,<br/><strong>L'équipe AURBIC SCP</strong></p>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: contact.email,
    subject: 'AURBIC SCP — Nous avons bien reçu votre message',
    html: emailTemplate('Votre message a bien été reçu', content),
  });
};

// Email de notification pour une nouvelle demande de devis
const sendDevisNotification = async (devis) => {
  const transporter = createTransporter();
  const content = `
    <div class="badge">Nouvelle demande de devis</div>
    <hr class="divider" />
    <div class="field">
      <div class="field-label">Contact</div>
      <div class="field-value">${devis.name} — ${devis.email} — ${devis.phone}</div>
    </div>
    ${devis.company ? `<div class="field"><div class="field-label">Société</div><div class="field-value">${devis.company}</div></div>` : ''}
    <div class="field">
      <div class="field-label">Type de projet</div>
      <div class="field-value">${devis.projectType}</div>
    </div>
    <div class="field">
      <div class="field-label">Localisation</div>
      <div class="field-value">${devis.location}</div>
    </div>
    ${devis.surface ? `<div class="field"><div class="field-label">Surface estimée</div><div class="field-value">${devis.surface} m²</div></div>` : ''}
    ${devis.budget ? `<div class="field"><div class="field-label">Budget envisagé</div><div class="field-value">${devis.budget}</div></div>` : ''}
    ${devis.timeline ? `<div class="field"><div class="field-label">Délai souhaité</div><div class="field-value">${devis.timeline}</div></div>` : ''}
    <div class="field">
      <div class="field-label">Description du projet</div>
      <div class="field-value">${devis.description.replace(/\n/g, '<br/>')}</div>
    </div>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_RECIPIENT,
    replyTo: devis.email,
    subject: `[AURBIC] Demande de devis — ${devis.projectType} — ${devis.name}`,
    html: emailTemplate(`Demande de devis de ${devis.name}`, content),
  });
};

// Email de confirmation devis au client
const sendDevisConfirmation = async (devis) => {
  const transporter = createTransporter();
  const content = `
    <p>Bonjour <strong>${devis.name}</strong>,</p>
    <p>Nous avons bien reçu votre demande de devis pour votre projet de <strong>${devis.projectType.toLowerCase()}</strong>.</p>
    <p>Notre équipe technique analysera votre dossier et vous contactera sous <strong>48 à 72 heures ouvrées</strong> pour un premier échange.</p>
    <hr class="divider" />
    <p style="font-size:13px;color:#888">Récapitulatif de votre demande :</p>
    <div class="field">
      <div class="field-label">Type de projet</div>
      <div class="field-value">${devis.projectType}</div>
    </div>
    <div class="field">
      <div class="field-label">Localisation</div>
      <div class="field-value">${devis.location}</div>
    </div>
    <hr class="divider" />
    <p>Dans l'attente de notre échange,<br/><strong>L'équipe AURBIC SCP</strong><br/>+227 00 00 00 00 · contact@aurbic.ne</p>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: devis.email,
    subject: 'AURBIC SCP — Demande de devis bien reçue',
    html: emailTemplate('Votre demande de devis est enregistrée', content),
  });
};

module.exports = {
  sendContactNotification,
  sendContactConfirmation,
  sendDevisNotification,
  sendDevisConfirmation,
};