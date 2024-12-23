/* Declares block-scoped local variables */
let myText = document.querySelector('input');
let myButton = document.querySelector('button');
let duplicateField = document.querySelector('#duplicateField');

/* Listen input event */
myText.addEventListener('input', () => {
    myText.textContent = this.value; /* set the content  from the form filed with tag <input> */
    duplicateField.textContent = myText.value; /* Set the content enetered in the form filed <input> to the field with the id = duplicateField */

});

/* Lisen the click event */
myButton.addEventListener('click', (event) => {
    event.preventDefault(); /* Prevent sending a form on clicking Submit button */
    console.log(myText.value); /* Display the text entered in the form in console */
    myText.value = ""; /* clear text in the form field input */
    duplicateField.textContent = myText.value; /* clear the field with id duplicateField */

});



