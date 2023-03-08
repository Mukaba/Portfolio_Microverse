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
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic',
    featured_image: './assets/img/card_tonic.svg',
    technologies: ['html', 'css', 'javaScript'],
    see_project: 'See Project',
    link_to_live_version: '<a target="_blank" href="https://mukaba.github.io/Portfolio_Microverse/">Go live</a>',
    link_to_source: '<a target="_blank" href="https://github.com/Mukaba/Portfolio_Microverse">See source</a>',
  },
  {
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic',
    featured_image: './assets/img/card_tonic2.svg',
    technologies: ['html', 'css', 'javaScript'],
    see_project: 'See Project',
    link_to_live_version: '<a target="_blank" href="https://mukaba.github.io/Portfolio_Microverse/">Go live</a>',
    link_to_source: '<a target="_blank" href="https://github.com/Mukaba/Portfolio_Microverse">See source</a>',
  },
  {
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic',
    featured_image: './assets/img/card_multi.svg',
    technologies: ['html', 'css', 'javaScript'],
    see_project: 'See Project',
    link_to_live_version: '<a target="_blank" href="https://mukaba.github.io/Portfolio_Microverse/">Go live</a>',
    link_to_source: '<a target="_blank" href="https://github.com/Mukaba/Portfolio_Microverse">See source</a>',
  },
  {
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic',
    featured_image: './assets/img/card_multi2.svg',
    technologies: ['html', 'css', 'javaScript'],
    see_project: 'See Project',
    link_to_live_version: '<a target="_blank" href="https://mukaba.github.io/Portfolio_Microverse/">Go live</a>',
    link_to_source: '<a target="_blank" href="https://github.com/Mukaba/Portfolio_Microverse">See source</a>',
  },
];

// card section
const cardsCont = document.getElementById('myWorks');
cardArray.map((card) => {
  cardsCont.innerHTML += `
      <div class="works__item tonic__project">
        <div class="tonic__header header__container">
            <img src="${card.featured_image}">
        </div>
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
            ${card.description}
            </p>
            <ul class="project__languages">
                <li>${card.technologies[0]}</li>
                <li>${card.technologies[1]}</li>
                <li>${card.technologies[2]}</li>
            </ul>
            <button class="see__project openPop">${card.see_project}</button>
        </div>
    </div>
  `;
  return ('');
});

const showMore = document.querySelectorAll('.openPop');
const pop = document.querySelector('.see__project_popup');

showMore.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    pop.classList.add('act');
    pop.innerHTML = `    
    <div class="project__popup" id="cardsPopups">
        <div class="works__item tonic__project reverse__pop">
            <div class="card__head">
                <div class="item__title flex">
                    <h3 class="project__title">${cardArray[index].name}</h3>
                    <div class="closePopup"></div>
                </div>
                <div class="project__tags">
                    <p>CANOPY</p>
                    <div class="project__tags-boulet gray_color"></div>
                    <div class="gray_color">Back End Dev</div>
                    <div class="project__tags-boulet gray_color"></div>
                    <div class="gray_color">2015</div>
                </div>
                <div class="tonic__header header__container2">
                    <img src="${cardArray[index].featured_image}">
                </div>
            </div>
            <div class="tonic__details ttt">
                <p class="project__description">${cardArray[index].description}</p>
                <div class="tonic__details">
                    <ul class="project__languages">
                        <li>${cardArray[index].technologies[0]}</li>
                        <li>${cardArray[index].technologies[1]}</li>
                        <li>${cardArray[index].technologies[2]}</li>
                    </ul>
                    <hr class="grow">
                    <div class="see__project_btn flex">
                        <button class="see__project popup-btn flex">
                            <span class="block ">${cardArray[index].link_to_live_version}</span>
                            <span class="block goLive"></span>
                        </button>
                        <button class="see__project popup-btn flex">
                            <span class="block">${cardArray[index].link_to_source}</span>
                            <span class="block seeCode"></span>
                        </button>
                    </div>
                </div>
            </div>
          </div>
    </div>
</div>
`;
    const popClose = document.querySelector('.closePopup');
    popClose.addEventListener('click', () => {
      pop.classList.remove('act');
    });
  });
});

// form validation

const capLow = (str) => {
  const lowerCase = str.toString().toLowerCase();
  if (str === lowerCase) {
    return true;
  }
  return false;
};
const validation = (email) => {
  email.preventDefault();
  const mailValue = document.getElementById('email').value;
  const form = document.getElementById('contactForm');
  const result = capLow(mailValue);
  if (result === true) {
    form.action = 'https://formspree.io/f/xgebklbg';
    form.submit();
  } else {
    const throughError = document.getElementById('errorMsg');
    throughError.innerHTML = '<i>The email provided is invalid !</i>';
  }
};
const form = document.getElementById('contactForm');
form.addEventListener('submit', validation);
