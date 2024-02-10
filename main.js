import { createHeader, reload_table, reload_wallets } from "./modules/ui";
import { getData } from "/modules/helpers"

// headers 
let container_header = document.querySelector('.container_header')
let cont_two = document.querySelector('.container2 .center')
let tbody = document.querySelector('.container3 tbody');
let gmail = document.querySelector('.management #email')

gmail.innerHTML = JSON.parse(localStorage.getItem('user')).email;

createHeader(container_header)
getData('/wallets?user_id=' + user.id)
    .then(res => {
        if(res.status === 200 || res.status === 201) {
            reload_wallets(res.data, cont_two)
        }
    })
    getData('/wallets?user_id=' + user.id)
    .then(res => {
        if(res.status === 200 || res.status === 201) {
            reload_table(res.data, cont_two)
        }
    })
reload_table([1, 2, 4], tbody)

// let storedUserData = JSON.parse(localStorage.getItem('user'));
// document.getElementById('name').innerHTML = 'Добро пожаловать, ' + storedUserData.name + ' ' + storedUserData.surname;


// let storedUserEmail = JSON.parse(localStorage.getItem('user'));
// document.getElementById('email').innerHTML = ' ' + storedUserEmail.email;
