import { getData } from "/modules/helpers"
import { reload_wallets, createHeader, storedUserEmail } from "/modules/ui"

const container_header = document.querySelector('.container_header')
let cont_two = document.querySelector('.container2 .center')
let user = JSON.parse(localStorage.getItem('user')) || null

createHeader(container_header)
storedUserEmail()

getData('/wallets?user_id=' + user.id)
    .then(res => {
        if(res.status === 200 || res.status === 201) {
            reload_wallets(res.data, cont_two)
        }
    })

// let storedUserEmail = JSON.parse(localStorage.getItem('user'));
// document.getElementById('email').innerHTML = ' ' + storedUserEmail.email;