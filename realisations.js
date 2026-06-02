// =============================================
// DONNÉES DES PROJETS
// =============================================
const projects = [
  {
    id: 1,
    title: "École moderne de Niamey",
    category: ["architecture", "institutionnel"],
    location: "Niamey, Niger",
    year: 2023,
    image: "images/Ecole/Ecole01.JPG",
    description: "Conception d'une école moderne intégrant des principes de bioclimatisme et d'accessibilité universelle. Bâtiment de référence pour l'éducation au Niger.",
    fullDescription: "Ce projet phare combine l'architecture contemporaine avec les matériaux locaux. L'école accueille 450 élèves et dispose de 16 salles de classe, une bibliothèque, un centre informatique et des espaces récréatifs. La conception favorise la ventilation naturelle et l'éclairage zénithal.",
    images: ["images/Ecole/Ecole01.JPG", "images/Ecole/Ecole02.jpg"],
    budget: "450 M XOF",
    surface: "4,500 m²",
    client: "Ministère de l'Éducation"
  },
  {
    id: 2,
    title: "Internat des jeunes filles",
    category: ["architecture", "residentiel"],
    location: "Niamey, Niger",
    year: 2024,
    image: "images/Internat%20des%20jeunes%20filles/Inter01.jpeg",
    description: "Structure d'hébergement pour 200 jeunes filles. Design respectueux des normes de sécurité et de confort optimal.",
    fullDescription: "Complexe résidentiel dédié accueillant 200 pensionnaires avec chambres individuelles et espaces communs. Installations incluent cafétéria, infirmerie, salle d'étude et espaces de loisirs. Construction aux standards internationaux avec conformité aux normes de sécurité incendie.",
    images: ["images/Internat%20des%20jeunes%20filles/Inter01.jpeg", "images/Internat%20des%20jeunes%20filles/Inter02.jpg"],
    budget: "650 M XOF",
    surface: "6,200 m²",
    client: "ONG Éducation Africaine"
  },
  {
    id: 3,
    title: "Résidence Abba",
    category: ["architecture", "residentiel"],
    location: "Niamey, Niger",
    year: 2024,
    image: "images/ResidenceAbba/Abba01.JPG",
    description: "Résidence haut de gamme avec 12 villas. Intégration harmonieuse dans l'environnement urbain avec espaces verts aménagés.",
    fullDescription: "Programme immobilier de prestige composé de 12 villas individuelles, chacune dotée de 4 chambres, piscine privée et jardin paysager. Aménagements collectifs incluent courts de tennis, club house et services de conciergerie.",
    images: ["images/ResidenceAbba/Abba01.JPG", "images/ResidenceAbba/Abba02.JPG"],
    budget: "1,200 M XOF",
    surface: "8,500 m²",
    client: "Promoteur immobilier privé"
  },
  {
    id: 4,
    title: "Projet Hôpital CURE",
    category: ["ingenierie", "institutionnel"],
    location: "Niamey, Niger",
    year: 2023,
    image: "images/HopitalCure/Cure01.JPG",
    description: "Participation aux travaux de construction et développement des infrastructures du complexe hospitalier CURE.",
    fullDescription: "Participation technique et de coordination sur le complexe hospitalier CURE. Le projet comprend blocs opératoires, maternité, services de diagnostic et unités de soins. Notre intervention a porté sur l'expertise technique, la coordination des travaux et l'assurance qualité architecturale pour livrer une infrastructure de santé performante et résiliente. Principales contributions :\n- Expertise technique et suivis d'exécution\n- Coordination interdisciplinaire des corps de métier\n- Contribution à une infrastructure de santé répondant aux normes internationales\n- Qualité architecturale et confort patient (ventilation naturelle, circuits fluides, accessibilité)",
    images: [
      "images/HopitalCure/Cure01.JPG",
      "images/HopitalCure/Cure02.JPG",
      "images/HopitalCure/Cure03.JPG",
      "images/HopitalCure/Cure05.JPG"
    ],
    budget: "2,500 M XOF",
    surface: "12,000 m²",
    client: "Ministère de la Santé"
  },
  {
    id: 5,
    title: "Résidence Guy",
    category: ["architecture", "residentiel"],
    location: "Niamey, Niger",
    year: 2023,
    image: "images/Residence%20Guy/GUY03.jpeg",
    description: "Ensemble résidentiel semi-collectif pour 45 familles. Mixité fonctionnelle avec commerces et services intégrés.",
    fullDescription: "Programme de logements intermédiaires comprenant 45 unités de 2 à 4 chambres, locaux commerciaux au rez-de-chaussée, parkings en sous-sol et aires vertes communes. Architecture respectueuse des paysages urbains locaux.",
    images: ["images/Residence%20Guy/GUY03.jpeg", "images/Residence%20Guy/GUY04.JPG"],
    budget: "800 M XOF",
    surface: "5,200 m²",
    client: "Société de développement urbain"
  },
  {
    id: 6,
    title: "Guéno Business Center",
    category: ["architecture", "ingenierie"],
    location: "Niamey, Niger",
    year: 2022,
    image: "images/Gueno/Gueno01.JPG",
    description: "Centre d'affaires multifonctionnel avec bureaux, salles de réunion et espaces collaboratifs. Infrastructure digitale high-tech.",
    fullDescription: "Immeuble de bureaux moderne de R+5 avec ascenseurs, escaliers de secours, espaces flexibles, cafétéria et terrasse vue panoramique. Équipements connectés, climatisation intelligente et système de gestion technique centralisée.",
    images: ["images/Gueno/Gueno01.JPG", "images/Gueno/Gueno02.JPG"],
    budget: "1,000 M XOF",
    surface: "4,800 m²",
    client: "Société Guéno SARL"
  },
  {
    id: 7,
    title: "Salle de Classe en Matériaux Locaux – FSSP",
    category: ["architecture", "institutionnel"],
    location: "Niamey, Niger",
    year: 2025,
    image: "images/FSSP/FSSP01.JPG",
    description: "Salle de classe durable conçue en matériaux locaux pour le Fonds de Solidarité pour la Sauvegarde de la Patrie.",
    fullDescription: "Projet de salle de classe de 420 m² réalisé dans le quartier NY 2000 de Niamey. Le bâtiment mise sur des matériaux locaux et des techniques de construction écologique afin de réduire l'empreinte carbone, améliorer le confort thermique et renforcer le lien avec l'identité locale. Le programme inclut des espaces pédagogiques flexibles, une ventilation naturelle optimisée et des finitions adaptées au climat sahélien.",
    images: ["images/FSSP/FSSP01.JPG", "images/FSSP/FSSP02.JPG", "images/FSSP/FSSP03.JPG"],
    budget: "120 M XOF",
    surface: "420 m²",
    client: "Fonds de Solidarité pour la Sauvegarde de la Patrie"
  }
  ,
  {
    id: 8,
    title: "Espace Réservé — Projets à venir",
    category: ["coming-soon"],
    location: "À venir",
    year: "—",
    image: "images/centre-administratif-niamey.svg",
    description: "Espace réservé pour nos projets en développement. Bientôt plus d'informations et de visuels.",
    fullDescription: "Projets en cours de développement, maquettes et études. Revenez bientôt pour découvrir nos prochaines réalisations.",
    images: ["images/centre-administratif-niamey.svg"],
    budget: "—",
    surface: "—",
    client: "—"
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
    const card = document.createElement('div');
    card.className = 'project-card active';
    card.innerHTML = `
      <div class="project-card__image">
        <img src="${project.image}" alt="${project.title}" />
      </div>
      <div class="project-card__content">
        <div class="project-card__category">${project.category[0]}</div>
        <h3 class="project-card__title">${project.title}</h3>
        <div class="project-card__meta">${project.year} · ${project.location}</div>
        <p class="project-card__description">${project.description}</p>
        <a class="project-card__cta">Voir le projet →</a>
      </div>
    `;
    
    card.addEventListener('click', () => openModal(project));
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
    <img src="${project.images[0]}" alt="${project.title}" class="modal__image" />
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
    
    ${project.images.length > 1 ? `
      <div class="modal__gallery">
        ${project.images.slice(1).map(img => `
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
renderProjects();

})();
