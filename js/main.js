/********************************* FILE JS ****************************************/
// linguaggio restrittivo js
'use strict'; 

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

// variabili
const imagesLands = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

const items = document.querySelector('.items');

let currentImage = 0;

// elementi in dom avanti e indietro
const elementPrev = document.querySelector('.prev');
const elementNext = document.querySelector('.next');

// eventi su avanti e indietro
elementPrev.addEventListener('click', next);
elementNext.addEventListener('click', prev);

// ciclo e dom
for(let i = 0; i < imagesLands.length; i++) {

    const elementBoxImage = document.createElement('div');
    elementBoxImage.classList.add('item');

    if (i === currentImage) {
        elementBoxImage.classList.add('active');
    };

    const elementImg = document.createElement('img');
    elementImg.src = `img/${imagesLands[i]}`;
    elementImg.alt = `Landscape ${i}`;
    
    elementBoxImage.append(elementImg);
    items.append(elementBoxImage);
};

// NodeList elementi creati con ciclo
const elementBoxesImagesDom = document.querySelectorAll('.item');

// elementi in dom bottoni play e stop
const playButton = document.querySelector('.play');
const stopButton = document.querySelector('.stop');

// Autoplay per bottoni
let autoplayCarousel;

// autoplay su bottoni play e stop
playButton.addEventListener('click', next);
stopButton.addEventListener('click', next);

// eventi sui bottoni play e stop
playButton.addEventListener('click', function() {
    autoplayCarousel = setInterval(next, 3000);
    console.log('ho cliccato play');
});

stopButton.addEventListener('click', function () {
    clearInterval(autoplayCarousel);
    console.log('ho cliccato stop');
});
