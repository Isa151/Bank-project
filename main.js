import { getData } from "./modules/helpers";
import { createHeader, reload_table, reload_wallets, storedUserData, storedUserEmail } from "./modules/ui";

// headers 
let container_header = document.querySelector('.container_header')
let cont_two = document.querySelector('.container2 .center')
let tbody = document.querySelector('.container3 tbody');
let user = JSON.parse(localStorage.getItem('user')) || null
let name = document.querySelector('#name span')
createHeader(container_header)
storedUserData()
storedUserEmail()

getData('/wallets?user_id=' + user.id)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            reload_wallets(res.data, cont_two)
        }
    })

getData('/transactions?user_id=' + user.id)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            reload_table(res.data, tbody)
        }
    })

// let storedUserData = JSON.parse(localStorage.getItem('user'));
// document.getElementById('name').innerHTML = 'Добро пожаловать, ' + storedUserData.name + ' ' + storedUserData.surname;


// let storedUserEmail = JSON.parse(localStorage.getItem('user'));
// document.getElementById('email').innerHTML = ' ' + storedUserEmail.email;