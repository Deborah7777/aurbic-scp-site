// =============================================
// DONNÉES DES PROJETS
// =============================================
const projects = [
  {
    id: "ecole-moderne-niamey",
    title: "École moderne de Niamey",
    category: ["architecture", "institutionnel"],
    type: "Institutionnel éducatif",
    location: "Niamey, Niger",
    year: 2023,
    duration: "12 mois",
    floors: "2 niveaux",
    rooms: "16 salles de classe",
    coverImage: "images/Ecole/Ecole01.JPG",
    description: "Conception d'une école moderne intégrant des principes de bioclimatisme et d'accessibilité universelle.",
    fullDescription: "Ce projet phare combine l'architecture contemporaine avec les matériaux locaux. L'école accueille 450 élèves et dispose de 16 salles de classe, une bibliothèque, un centre informatique et des espaces récréatifs. La conception favorise la ventilation naturelle, l'éclairage zénithal et des parcours accessibles.",
    gallery: ["images/Ecole/Ecole01.JPG", "images/Ecole/Ecole02.jpg"],
    budget: "450 M XOF",
    surface: "4,500 m²",
    client: "Ministère de l'Éducation",
    status: "Achevé"
  },
  {
    id: "internat-jeunes-filles",
    title: "Internat des jeunes filles",
    category: ["architecture", "residentiel"],
    type: "Internat privé",
    location: "Niamey, Niger",
    year: 2024,
    duration: "10 mois",
    floors: "3 niveaux",
    rooms: "200 places",
    coverImage: "images/Internat%20des%20jeunes%20filles/Inter01.jpeg",
    description: "Structure d'hébergement pour 200 jeunes filles avec sécurité, confort et espaces partagés.",
    fullDescription: "Complexe résidentiel dédié accueillant 200 pensionnaires avec chambres individuelles et espaces communs. Installations incluent cafétéria, infirmerie, salle d'étude et espaces de loisirs. Construction aux standards internationaux avec conformité aux normes de sécurité incendie.",
    gallery: ["images/Internat%20des%20jeunes%20filles/Inter01.jpeg", "images/Internat%20des%20jeunes%20filles/Inter02.jpg"],
    budget: "650 M XOF",
    surface: "6,200 m²",
    client: "ONG Éducation Africaine",
    status: "Achevé"
  },
  {
    id: "residence-abba",
    title: "Résidence Abba",
    category: ["architecture", "residentiel"],
    type: "Résidence privée",
    location: "Niamey, Niger",
    year: 2024,
    duration: "14 mois",
    floors: "2 niveaux",
    rooms: "12 villas",
    coverImage: "images/ResidenceAbba/Abba01.JPG",
    description: "Résidence haut de gamme avec villas modernes et espaces paysagers aménagés.",
    fullDescription: "Programme immobilier de prestige composé de 12 villas individuelles, chacune dotée de 4 chambres, piscine privée et jardin paysager. Aménagements collectifs incluent courts de tennis, club house et services de conciergerie.",
    gallery: ["images/ResidenceAbba/Abba01.JPG", "images/ResidenceAbba/Abba02.JPG"],
    budget: "1,200 M XOF",
    surface: "8,500 m²",
    client: "Promoteur immobilier privé",
    status: "Achevé"
  },
  {
    id: "hopital-cure",
    title: "Projet Hôpital CURE",
    category: ["ingenierie", "institutionnel"],
    type: "Complexe hospitalier",
    location: "Niamey, Niger",
    year: 2023,
    duration: "18 mois",
    floors: "2 niveaux",
    rooms: "8 blocs médicaux",
    coverImage: "images/HopitalCure/Cure01.JPG",
    description: "Coordination technique et construction des infrastructures du complexe hospitalier CURE.",
    fullDescription: "Participation technique et de coordination sur le complexe hospitalier CURE. Le projet comprend blocs opératoires, maternité, services de diagnostic et unités de soins. Notre intervention a porté sur l'expertise technique, la coordination des travaux et l'assurance qualité architecturale pour livrer une infrastructure de santé performante et résiliente.",
    gallery: [
      "images/HopitalCure/Cure01.JPG",
      "images/HopitalCure/Cure02.JPG",
      "images/HopitalCure/Cure03.JPG",
      "images/HopitalCure/Cure05.JPG"
    ],
    budget: "2,500 M XOF",
    surface: "12,000 m²",
    client: "Ministère de la Santé",
    status: "Achevé"
  },
  {
    id: "residence-guy",
    title: "Résidence Guy",
    category: ["architecture", "residentiel"],
    type: "Logements collectifs",
    location: "Niamey, Niger",
    year: 2023,
    duration: "12 mois",
    floors: "4 niveaux",
    rooms: "45 unités",
    coverImage: "images/Residence%20Guy/GUY03.jpeg",
    description: "Ensemble résidentiel semi-collectif avec commerces et services intégrés.",
    fullDescription: "Programme de logements intermédiaires comprenant 45 unités de 2 à 4 chambres, locaux commerciaux au rez-de-chaussée, parkings en sous-sol et aires vertes communes. Architecture respectueuse des paysages urbains locaux.",
    gallery: ["images/Residence%20Guy/GUY03.jpeg", "images/Residence%20Guy/GUY04.JPG"],
    budget: "800 M XOF",
    surface: "5,200 m²",
    client: "Société de développement urbain",
    status: "Achevé"
  },
  {
    id: "gueno-business-center",
    title: "Guéno Business Center",
    category: ["architecture", "ingenierie"],
    type: "Centre d'affaires",
    location: "Niamey, Niger",
    year: 2022,
    duration: "16 mois",
    floors: "5 niveaux",
    rooms: "25 bureaux",
    coverImage: "images/Gueno/Gueno01.JPG",
    description: "Centre d'affaires moderne avec bureaux et espaces collaboratifs high-tech.",
    fullDescription: "Immeuble de bureaux moderne de R+5 avec ascenseurs, escaliers de secours, espaces flexibles, cafétéria et terrasse vue panoramique. Équipements connectés, climatisation intelligente et système de gestion technique centralisée.",
    gallery: ["images/Gueno/Gueno01.JPG", "images/Gueno/Gueno02.JPG"],
    budget: "1,000 M XOF",
    surface: "4,800 m²",
    client: "Société Guéno SARL",
    status: "Achevé"
  },
  {
    id: "salle-classe-fssp",
    title: "Salle de Classe en Matériaux Locaux – FSSP",
    category: ["architecture", "institutionnel"],
    type: "Salle de classe écologique",
    location: "Niamey, Niger",
    year: 2025,
    duration: "8 mois",
    floors: "1 niveau",
    rooms: "1 salle polyvalente",
    coverImage: "images/FSSP/FSSP01.JPG",
    description: "Salle de classe durable conçue en matériaux locaux pour le projet FSSP.",
    fullDescription: "Projet de salle de classe de 420 m² réalisé dans le quartier NY 2000 de Niamey. Le bâtiment mise sur des matériaux locaux et des techniques de construction écologique afin de réduire l'empreinte carbone, améliorer le confort thermique et renforcer le lien avec l'identité locale.",
    gallery: ["images/FSSP/FSSP01.JPG", "images/FSSP/FSSP02.JPG", "images/FSSP/FSSP03.JPG"],
    budget: "120 M XOF",
    surface: "420 m²",
    client: "Fonds de Solidarité pour la Sauvegarde de la Patrie",
    status: "Achevé"
  },
  {
    id: "projets-a-venir",
    title: "Espace Réservé — Projets à venir",
    category: ["coming-soon"],
    type: "Projets en développement",
    location: "À venir",
    year: "—",
    duration: "En cours",
    floors: "—",
    rooms: "—",
    coverImage: "images/centre-administratif-niamey.svg",
    description: "Espace réservé pour nos projets en développement. Bientôt plus d'informations et de visuels.",
    fullDescription: "Projets en cours de développement, maquettes et études. Revenez bientôt pour découvrir nos prochaines réalisations.",
    gallery: ["images/centre-administratif-niamey.svg"],
    budget: "—",
    surface: "—",
    client: "—",
    status: "En préparation"
  }
];

// =============================================
// GESTION DE LA NAVBAR
// =============================================
(function(){
  // NAVBAR handling scoped to this module
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const burger = document.getElementById('burger');
  const navbarLinks = document.querySelector('.navbar__links');
  burger?.addEventListener('click', () => {
    navbarLinks?.classList.toggle('active');
  });

// =============================================
// INITIALISATION DES PROJETS
// =============================================
const projectsGrid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search-input');
const loadMoreBtn = document.getElementById('load-more-btn');
const projectModal = document.getElementById('project-modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalInner = document.getElementById('modal-inner');

let currentFilter = 'all';
let currentSearch = '';
let displayCount = 6;

// Afficher les projets
function renderProjects() {
  projectsGrid.innerHTML = '';

  const filtered = projects.filter(project => {
    const matchesFilter = currentFilter === 'all' || project.category.includes(currentFilter);
    const matchesSearch = project.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
                          project.location.toLowerCase().includes(currentSearch.toLowerCase()) ||
                          project.description.toLowerCase().includes(currentSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  filtered.slice(0, displayCount).forEach((project, index) => {
    const card = document.createElement('a');
    card.className = 'project-card active';
    card.href = `project.html?id=${project.id}`;
    card.innerHTML = `
      <div class="project-card__image">
        <img src="${project.coverImage}" alt="${project.title}" />
      </div>
      <div class="project-card__content">
        <div class="project-card__category">${project.category[0]}</div>
        <h3 class="project-card__title">${project.title}</h3>
        <div class="project-card__meta">${project.year} · ${project.location}</div>
        <p class="project-card__description">${project.description}</p>
        <span class="project-card__cta">Voir le projet →</span>
      </div>
    `;
    
    projectsGrid.appendChild(card);
  });

  // Gérer le bouton "Charger plus"
  if (filtered.length > displayCount) {
    loadMoreBtn.style.display = 'block';
  } else {
    loadMoreBtn.style.display = 'none';
  }
}

// =============================================
// FILTRES
// =============================================
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    displayCount = 6;
    renderProjects();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// =============================================
// RECHERCHE
// =============================================
searchInput?.addEventListener('input', (e) => {
  currentSearch = e.target.value;
  displayCount = 6;
  renderProjects();
});

// =============================================
// CHARGER PLUS DE PROJETS
// =============================================
loadMoreBtn?.addEventListener('click', () => {
  displayCount += 6;
  renderProjects();
  loadMoreBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// =============================================
// MODAL
// =============================================
function openModal(project) {
  modalInner.innerHTML = `
    <img src="${project.gallery[0]}" alt="${project.title}" class="modal__image" />
    <h2 class="modal__title">${project.title}</h2>
    
    <div class="modal__meta">
      <div class="modal__meta-item">
        <span class="modal__meta-label">Localisation</span>
        <span>${project.location}</span>
      </div>
      <div class="modal__meta-item">
        <span class="modal__meta-label">Année</span>
        <span>${project.year}</span>
      </div>
      <div class="modal__meta-item">
        <span class="modal__meta-label">Surface</span>
        <span>${project.surface}</span>
      </div>
      <div class="modal__meta-item">
        <span class="modal__meta-label">Budget</span>
        <span>${project.budget}</span>
      </div>
      <div class="modal__meta-item">
        <span class="modal__meta-label">Client</span>
        <span>${project.client}</span>
      </div>
    </div>
    
    <div class="modal__description">${project.fullDescription}</div>
    
    ${project.gallery.length > 1 ? `
      <div class="modal__gallery">
        ${project.gallery.slice(1).map(img => `
          <div class="modal__gallery-item">
            <img src="${img}" alt="${project.title}" />
          </div>
        `).join('')}
      </div>
    ` : ''}
    
    <div class="modal__cta">
      <a href="index.html#contact" class="btn btn--primary" onclick="closeModal()">Demander un devis</a>
      <button onclick="closeModal()" class="btn btn--outline-dark">Fermer</button>
    </div>
  `;
  
  projectModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  projectModal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Expose closeModal for inline onclick handlers used in generated HTML
window.closeModal = closeModal;

// Fermer la modal en cliquant sur l'overlay ou le bouton de fermeture
modalOverlay?.addEventListener('click', closeModal);
modalClose?.addEventListener('click', closeModal);

// Fermer la modal avec la touche Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// =============================================
// INITIALISATION
// =============================================
if (projectsGrid) {
  renderProjects();
}

bindStaticProjectCards();

function bindStaticProjectCards() {
  document.querySelectorAll('.portfolio-item[data-project-id]').forEach(item => {
    const projectId = item.dataset.projectId;
    if (!projectId) return;

    const targetUrl = `project.html?id=${projectId}`;
    const link = item.querySelector('.portfolio-item__link');
    if (link) {
      link.href = targetUrl;
    }

    item.addEventListener('click', (event) => {
      if (event.target.closest('a')) return;
      window.location.href = targetUrl;
    });
  });
}

// =============================================
// PREVIEW (pour la page d'accueil)
// =============================================
function renderPreview() {
  const previewRoot = document.getElementById('projects-preview');
  if (!previewRoot) return;

  // Choix des projets mis en avant (ordre souhaité)
  const featuredIds = [
    'hopital-cure',
    'salle-classe-fssp',
    'ecole-moderne-niamey'
  ];

  const grid = document.createElement('div');
  grid.className = 'projects-preview-grid';
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(280px, 1fr))';
  grid.style.gap = '20px';

  featuredIds.forEach(id => {
    const project = projects.find(p => p.id === id);
    if (!project) return;

    const card = document.createElement('a');
    card.className = 'project-preview-card reveal visible';
    card.href = `project.html?id=${project.id}`;
    card.style.display = 'block';
    card.style.borderRadius = '12px';
    card.style.overflow = 'hidden';
    card.style.background = '#fff';
    card.style.boxShadow = '0 12px 30px rgba(60,42,33,0.06)';

    card.innerHTML = `
      <div style="height:200px; overflow:hidden;"><img src="${project.coverImage}" alt="${project.title}" style="width:100%;height:100%;object-fit:cover;"/></div>
      <div style="padding:18px;">
        <div style="font-size:11px;color:#A15843;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px">${project.category[0]}</div>
        <h3 style="margin:0 0 8px;font-family: 'Cormorant Garamond', Georgia, serif;">${project.title}</h3>
        <div style="font-size:12px;color:#5C3D2E;margin-bottom:8px">${project.year} · ${project.location}</div>
        <p style="margin:0;color:#5C3D2E;font-size:13px;line-height:1.5">${project.description}</p>
      </div>
    `;

    grid.appendChild(card);
  });

  // CTA vers la page complète
  const wrapper = document.createElement('div');
  wrapper.appendChild(grid);
  const cta = document.createElement('div');
  cta.style.textAlign = 'center';
  cta.style.marginTop = '28px';
  cta.innerHTML = `<a href="realisations.html" class="btn btn--outline-dark">Voir toutes les réalisations →</a>`;
  wrapper.appendChild(cta);

  previewRoot.innerHTML = '';
  previewRoot.appendChild(wrapper);
}

// Exécuter le rendu preview si présent
  renderPreview();
  renderProjectDetail();

  function renderProjectDetail() {
    const detailRoot = document.getElementById('project-detail');
    if (!detailRoot) return;

    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    const project = projects.find(p => p.id === projectId);

    if (!project) {
      detailRoot.innerHTML = `
        <section class="project-detail">
          <div class="container">
            <a href="index.html#realisations" class="project-detail__back">← Retour aux réalisations</a>
            <div class="project-detail__empty">
              <h2>Projet introuvable</h2>
              <p>Ce projet n'existe plus ou l'URL est invalide. Retournez à la page des réalisations pour choisir un autre projet.</p>
            </div>
          </div>
        </section>
      `;
      return;
    }

    detailRoot.innerHTML = `
      <section class="project-detail">
        <div class="container">
          <a href="index.html#realisations" class="project-detail__back">← Retour aux réalisations</a>
          <div class="project-detail__header">
            <div>
              <span class="project-detail__tag">${project.type}</span>
              <h1 class="project-detail__title">${project.title}</h1>
              <p class="project-detail__subtitle">${project.description}</p>
            </div>
            <div class="project-detail__meta">
              <div class="project-detail__meta-item"><strong>Localisation</strong><span>${project.location}</span></div>
              <div class="project-detail__meta-item"><strong>Année</strong><span>${project.year}</span></div>
              <div class="project-detail__meta-item"><strong>Durée</strong><span>${project.duration}</span></div>
              <div class="project-detail__meta-item"><strong>Surface</strong><span>${project.surface}</span></div>
              <div class="project-detail__meta-item"><strong>Client</strong><span>${project.client}</span></div>
            </div>
          </div>

          <div class="project-detail__body">
            <div class="project-detail__gallery">
              ${project.gallery.map(src => `
                <div class="project-detail__gallery-item">
                  <img src="${src}" alt="${project.title}" />
                </div>
              `).join('')}
            </div>

            <div class="project-detail__info-card">
              <h2>Le projet en détail</h2>
              <p>${project.fullDescription}</p>

              <div class="project-detail__stats-grid">
                <div class="project-detail__stat-card">
                  <span>Surface totale</span>
                  <strong>${project.surface}</strong>
                </div>
                <div class="project-detail__stat-card">
                  <span>Nombre d'étages</span>
                  <strong>${project.floors}</strong>
                </div>
                <div class="project-detail__stat-card">
                  <span>Durée du chantier</span>
                  <strong>${project.duration}</strong>
                </div>
                <div class="project-detail__stat-card">
                  <span>Budget</span>
                  <strong>${project.budget}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
})();
