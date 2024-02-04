import { reload_wallets, createHeader, storedUserEmail } from "/modules/ui"

const container_header = document.querySelector('.container_header')
let cont_two = document.querySelector('.container2 .center')


createHeader(container_header)
reload_wallets([1, 2, 3, 4, , 5, 6, 7], cont_two)
storedUserEmail()


// let storedUserEmail = JSON.parse(localStorage.getItem('user'));
// document.getElementById('email').innerHTML = ' ' + storedUserEmail.email;