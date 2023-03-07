function menu() {
  const humberger = document.getElementById('humberger');
  humberger.classList.add('active');
}
function closemenu() {
  const humberger = document.getElementById('humberger');
  humberger.classList.remove('active');
}

document.getElementById('navbar').onclick = () => {
  menu();
  closemenu();
};

// popups

const cardArray = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: './assets/img/card_tonic.svg',
    technologies: ['html', 'css', 'javaScript'],
    see_project: 'See Project',
    link_to_live_version: 'Go live',
    link_to_source: 'See source code',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: './assets/img/card_tonic2.svg',
    technologies: ['html', 'css', 'javaScript'],
    see_project: 'See Project',
    link_to_live_version: 'Go live',
    link_to_source: 'See source code',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: './assets/img/card_multi.svg',
    technologies: ['html', 'css', 'javaScript'],
    see_project: 'See Project',
    link_to_live_version: 'Go live',
    link_to_source: 'See source code',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_image: './assets/img/card_multi2.svg',
    technologies: ['html', 'css', 'javaScript'],
    see_project: 'See Project',
    link_to_live_version: 'Go live',
    link_to_source: 'See source code',
  },
];

const cardsCont = document.getElementById('myWorks');

cardArray.map((card) => {
  cardsCont.innerHTML += `
      <div class="works__item tonic__project">
      <div class="tonic__header header__container"><img src="${card.featured_image}"></div>
      <div class="tonic__details">
          <h3 class="project__title">${card.name}</h3>
      <div class="project__tags">
          <p>CANOPY</p>
          <div class="project__tags-boulet gray_color"></div>
          <div class="gray_color">Back End Dev</div>
          <div class="project__tags-boulet gray_color"></div>
          <div class="gray_color">2015</div>
      </div>
      <p class="project__description">
          A daily selection of privately personalized reads; no accounts or sign-ups required.
      </p>
      <ul class="project__languages">
          <li>${card.technologies[0]}</li>
          <li>${card.technologies[1]}</li>
          <li>${card.technologies[2]}</li>
      </ul>
      <button class="see__project">${card.see_project}</button>
      </div>
    </div>
  `;
  return('');
});
