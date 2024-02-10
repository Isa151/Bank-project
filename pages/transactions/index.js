import { reload_table, createHeader } from "/modules/ui"


const container_header = document.querySelector('.container_header')
const tbody = document.querySelector('.container3 tbody')
let gmail = document.querySelector('.management #email')

gmail.innerHTML = JSON.parse(localStorage.getItem('user')).email;
createHeader(container_header)
reload_table([1, 2, 3, 4, 5, 6, 7, 8, 9], tbody)