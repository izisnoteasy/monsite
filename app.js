const carrousels = {
  1: {
    index: 0,
    container: null,
    total: 0
  },
  2: {
    index: 0,
    container: null,
    total: 0
  },
  3: {
    index: 0,
    container: null,
    total: 0
  },
  4: {
    index: 0,
    container: null,
    total: 0
  },
  5: {
    index: 0,
    container: null,
    total: 0
  },
  6: {
    index: 0,
    container: null,
    total: 0
  },
};

// Initialisation après le chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  // Initialiser le carrousel 1
  carrousels[1].container = document.querySelector('#carrousel1 .images');
  carrousels[1].total = document.querySelectorAll('#carrousel1 .images img').length;
 
  // Initialiser le carrousel 2
  carrousels[2].container = document.querySelector('#carrousel2 .images');
  carrousels[2].total = document.querySelectorAll('#carrousel2 .images img').length;

    // Initialiser le carrousel 3
  carrousels[3].container = document.querySelector('#carrousel3 .images');
  carrousels[3].total = document.querySelectorAll('#carrousel3 .images img').length;
 
 // Initialiser le carrousel 4
  carrousels[4].container = document.querySelector('#carrousel4 .images');
  carrousels[4].total = document.querySelectorAll('#carrousel4 .images img').length;
 
 // Initialiser le carrousel 4
  carrousels[5].container = document.querySelector('#carrousel5 .images');
  carrousels[5].total = document.querySelectorAll('#carrousel5 .images img').length;

  // Initialiser le carrousel 4
  carrousels[6].container = document.querySelector('#carrousel6 .images');
  carrousels[6].total = document.querySelectorAll('#carrousel6 .images img').length;
  console.log('Carrousels initialisés:', carrousels);
});

function mettreAJourCarrousel(num) {
  if (carrousels[num] && carrousels[num].container) {
    const deplacement = -carrousels[num].index * 300;
    carrousels[num].container.style.transform = `translateX(${deplacement}px)`;
  }
}

function suivant(num) {
  if (carrousels[num] && carrousels[num].total > 0) {
    carrousels[num].index = (carrousels[num].index + 1) % carrousels[num].total;
    mettreAJourCarrousel(num);
  }
}

function precedent(num) {
  if (carrousels[num] && carrousels[num].total > 0) {
    carrousels[num].index = (carrousels[num].index - 1 + carrousels[num].total) % carrousels[num].total;
    mettreAJourCarrousel(num);
  }
}