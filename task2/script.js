/* Declares block-scoped local variables */
const consoleLog = document.querySelector('#consoleLog');
const alertWindow = document.querySelector('#alert');
const promptWindow = document.querySelector('#prompt');

/* Pop up alert window on click on the element with the const name*/
consoleLog.addEventListener('click', () => {
    alert('Команда используется для вывода информации в консоли браузера');
});

alertWindow.addEventListener('click', () => {
    alert('Показывает всплывающее далоговое окно в браузере. В окне содержится сообщение и кнопка ОК');
});

promptWindow.addEventListener('click', () => {
    alert('Показывает всплывающее далоговое окно для ввода данных.');
});


