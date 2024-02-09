import { createHeader, reload_table, reload_wallets } from "./modules/ui";
// import { wallets } from "./pages/signin/script.js"
// headers 
let header = document.querySelector('header')
let cont_two = document.querySelector('.container2 .center')
let tbody = document.querySelector('.container3 tbody');

createHeader(header)
reload_wallets([1,2,3], cont_two)
reload_table([1,2,3,4,5,6,7,8,9,10], tbody)

let storedUserData = JSON.parse(localStorage.getItem('user'));
document.getElementById('name').innerHTML = 'Добро пожаловать, ' + storedUserData.name + ' ' + storedUserData.surname;

let storedUserEmail = JSON.parse(localStorage.getItem('user'));
document.getElementById('email').innerHTML = ' ' + storedUserEmail.email;

