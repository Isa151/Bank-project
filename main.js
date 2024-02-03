import { createHeader, reload_table, reload_wallets } from "./modules/ui";

// headers 
let container_header = document.querySelector('.container_header')
let cont_two = document.querySelector('.container2 .center')
let tbody = document.querySelector('.container3 tbody');

createHeader(container_header)
reload_wallets([1, 2, 4, 4, 5], cont_two)
reload_table([1, 2, 4], tbody)


// let storedUserData = JSON.parse(localStorage.getItem('user'));
// document.getElementById('name').innerHTML = 'Добро пожаловать, ' + storedUserData.name + ' ' + storedUserData.surname;


// let storedUserEmail = JSON.parse(localStorage.getItem('user'));
// document.getElementById('email').innerHTML = ' ' + storedUserEmail.email;
