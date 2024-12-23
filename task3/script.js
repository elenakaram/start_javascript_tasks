/* Declares block-scoped local variable */
const trafficLightEl = document.querySelector('#trafficLight');

/* Set the element color green by click on the element.
If the element is green then call the function to set yellow color. */
function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
};

/* Set the element color yellow by click on the element.
If the element is yellow then call the function to set red color. */
function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
};

/* Set the element color red by click on the element.
If the element is red then call the function to set green color. */
function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
};

/* Call the finction makeGreen on click */
trafficLightEl.addEventListener('click', makeGreen);





