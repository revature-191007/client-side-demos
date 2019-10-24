const inputBox = document
    .getElementsByName('todo-input')[0];

const submitButton = document
    .getElementById('todo-submit');

const listSection = document  
    .getElementById('list-section');

submitButton.addEventListener('click', () => {
    const inputValue = inputBox.value;
    // if the input is empty
    if (!inputValue) {
        return;
    }
    const newE = document.createElement('div');
    newE.classList.add('todo-item');
    newE.innerText = inputValue;
    inputBox.value = '';
    
    // setup listener
    newE.addEventListener('click', () => {
        listSection.removeChild(newE);
    });

    // append new element to DOM
    listSection.appendChild(newE);
})