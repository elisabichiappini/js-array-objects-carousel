/********************************* FILE JS ****************************************/
// linguaggio restrittivo js
'use strict'; 

// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.

// Milestone 0 - Creare un array di oggetti: [Url, titolo, descrizione]

// Milestone 1 - inserire oggetti letterali nel carosello; 
//             - Evento click utente su frecce verso sinistra o destra, l'immagine è active con titolo e testo (vedi screen allegato).

// Milestone 2 - Aggiungere il **ciclo infinito** del carosello. 

// BONUS 1 - Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

// BONUS 2 - Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

// BONUS 3 - Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

/*
functions
*/

function next(){
    elementBoxesImagesDom[currentImage].classList.remove('active');

    if (currentImage === elementBoxesImagesDom.length - 1) {
        currentImage = 0; 
    } else {
        currentImage++;
    }
    elementBoxesImagesDom[currentImage].classList.add('active');
};

function prev() { 
    elementBoxesImagesDom[currentImage].classList.remove('active');

    if (currentImage === 0) {
        currentImage = elementBoxesImagesDom.length - 1; 
    } else {
        currentImage--;
    }
    elementBoxesImagesDom[currentImage].classList.add('active');
}

/*
operations
*/
//arrayInfoImages di oggetti:
const arrayInfoImages = [
{   'img': 'img/01.jpg',
    'titolo': 'Como Lake',
    'descrizione': 'una riflesso inatteso'
},
{   'img': 'img/02.jpg',
    'titolo': 'Tirolo',
    'descrizione': 'piccoli borghi'
},
{   'img': 'img/03.jpg',
    'titolo': 'London',
    'descrizione': 'viva la Re(gina)'
},
{   'img': 'img/04.jpg',
    'titolo': 'Vienna',
    'descrizione': 'a spasso con Sissi'
},
{   'img': 'img/05.jpg',
    'titolo': 'bahamas',
    'descrizione': 'qui il telefono non prende'
}
];

console.log(arrayInfoImages);

// variabili
// const imagesLands = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const items = document.querySelector('.items');
let currentImage = 0;

//template contents
const elementTemplate = document.getElementById('objectTemplate').content;

arrayInfoImages.forEach((element, index) => {
    const nodeInfoImage = elementTemplate.cloneNode(true);

    nodeInfoImage.querySelector('h3').textContent = element.titolo;
    nodeInfoImage.querySelector('span').textContent = element.descrizione;
    nodeInfoImage.querySelector('img').src = `${element.img}`;
    nodeInfoImage.querySelector('img').alt = `Landscape ${index + 1}`;
    items.append(nodeInfoImage);
})

const firstImage = items.querySelector('.item');
firstImage.classList.add('active');


// NodeList elementi creati con ciclo
const elementBoxesImagesDom = document.querySelectorAll('.item');

// elementi in dom avanti e indietro
const elementPrev = document.querySelector('.prev');
const elementNext = document.querySelector('.next');

// eventi su avanti e indietro
elementPrev.addEventListener('click', next);
elementNext.addEventListener('click', prev);

// ciclo e dom
// for(let i = 0; i < imagesLands.length; i++) {

//     const elementBoxImage = document.createElement('div');
//     elementBoxImage.classList.add('item');

//     if (i === currentImage) {
//         elementBoxImage.classList.add('active');
//     };

//     const elementImg = document.createElement('img');
//     elementImg.src = `img/${imagesLands[i]}`;
//     elementImg.alt = `Landscape ${i + 1}`;
    
//     elementBoxImage.append(elementImg);
//     items.append(elementBoxImage);
// };


// Autoplay per bottoni
let autoplayCarousel;


// elementi in dom bottoni play e stop
const playButton = document.querySelector('.play');
const stopButton = document.querySelector('.stop');


// eventi sui bottoni play e stop
playButton.addEventListener('click', function() {
    autoplayCarousel = setInterval(next, 3000);
    console.log('ho cliccato play');
});

stopButton.addEventListener('click', function () {
    clearInterval(autoplayCarousel);
    console.log('ho cliccato stop');
});

// autoplay su bottoni play e stop
playButton.addEventListener('click', next);
stopButton.addEventListener('click', next);
