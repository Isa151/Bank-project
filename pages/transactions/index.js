import { getData } from "/modules/helpers"
import { reload_table, createHeader, storedUserEmail } from "/modules/ui"

const container_header = document.querySelector('.container_header')
const tbody = document.querySelector('.container3 tbody')
let user = JSON.parse(localStorage.getItem('user')) || null
let gmail = document.querySelector('.management #email')

gmail.innerHTML = user.email;
createHeader(container_header)
storedUserEmail()

getData('/transactions?user_id=' + user.id)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            reload_table(res.data, tbody)
        }
    })