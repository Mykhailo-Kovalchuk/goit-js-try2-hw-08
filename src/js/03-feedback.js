
import throttle  from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input  = document.querySelector('input');
const textArea = document.querySelector('textarea');
const button = document.querySelector('button');


storageCheck(); // викликаємо функцію на початку скрипту, щоб одразу перевірити вміст сховища


form.addEventListener('input', throttle(handler, 500)); 

// Функція обробник, яка записує значення інпуту в локальне сховище
function handler () {
    const clientData = {
    email: input.value,
    message: textArea.value
}
localStorage.setItem('feedback-form-state', JSON.stringify(clientData));
button.addEventListener('click', refresher);
}


// Функція-оновлювач при натисканні на кнопку і сабміті. 
function refresher (event) {
    event.preventDefault();

    if (event) {
const currentValue = {
    Email: input.value,
    Message: textArea.value
}; 
console.log(currentValue);

localStorage.removeItem('feedback-form-state');
input.value = "";
textArea.value = "";
    }
}



// Допоміжна функція яка перевіряє вміст LocalStorage при перезавантаженні сторінки
// і підкладає звідти значення якщо такі існують.
function storageCheck () {

    const savedClientData = localStorage.getItem('feedback-form-state');
const parsedClientData = JSON.parse(savedClientData);
// console.log(parsedClientData);

if (parsedClientData === null) {
    input.value = "";
    textArea.value = "";
} else { 
    input.value = parsedClientData.email;
    textArea.value = parsedClientData.message;
}
}

