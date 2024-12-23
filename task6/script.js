/* Declares block-scoped local variables */
let trafficLight1 = document.querySelector('#trafficLight1');
let trafficLight2 = document.querySelector('#trafficLight2');
let trafficLight3 = document.querySelector('#trafficLight3');

/* This function sets green color for the first cirle, then on click event sets yellow color 
for the second circle and keep black color for the third circle */
function makeGreen() {
    trafficLight1.style.background = ('green');
    trafficLight1.removeEventListener('click', makeGreen);
    trafficLight2.addEventListener('click', makeYellow);
    trafficLight3.style.background = ('black');
}

/* This function sets yellow color for the second cirle, then on click event sets red color 
for the third circle and keep black color for the first circle */
function makeYellow() {
    trafficLight2.style.background = ('yellow');
    trafficLight2.removeEventListener('click', makeYellow);
    trafficLight3.addEventListener('click', makeRed);
    trafficLight1.style.background = ('black');
}

/* This function sets red color for the third cirle, then on click event sets green color 
for the first circle and keep black color for the second circle */
function makeRed() {
    trafficLight3.style.background = ('red');
    trafficLight3.removeEventListener('click', makeRed);
    trafficLight1.addEventListener('click', makeGreen);
    trafficLight2.style.background = ('black');
}

/* Execute function green on click event */
trafficLight1.addEventListener('click', makeGreen);
