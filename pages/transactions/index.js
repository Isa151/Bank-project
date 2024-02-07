import { reload_table, createHeader } from "/modules/ui"


const header = document.querySelector('header')
const tbody = document.querySelector('.container3 tbody')

createHeader(header)
reload_table([1, 2, 3, 4, 5, 6, 7, 8, 9], tbody)