/* Declares block-scoped local variable */
let newText = document.querySelector('#newText');

newText.addEventListener('click', (event) => {
    /* Reset the default link event (<a> tag) */
    event.preventDefault();
    /* Enter new text in the pop window. New text will be applied to the link with the id #newText */
    newText.textContent = prompt('Enter new Text for the Link here: ');
});

