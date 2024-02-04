import { reload_table, createHeader, storedUserEmail } from "/modules/ui"

const container_header = document.querySelector('.container_header')
const tbody = document.querySelector('.container3 tbody')

createHeader(container_header)
reload_table([1, 2, 3, 4, 5, 6, 7, 8, 9], tbody)
storedUserEmail()