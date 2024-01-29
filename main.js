// import {
//     getData
// } from "/modules/helpers";

import {
    start
} from "/pages/signin/index.js";



let header = document.querySelector('header')
let gmail = document.querySelector('.gmail')
let box = document.querySelector('.box')
let cards = [1, 2, 3, 4, 5, 6]
let line = document.querySelector('.line')
let lines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



reload(start)

function reload(user) {
    // location.href = location

    gmail.innerHTML = user.email

    createHeader(header, user)
    addCard(box, cards)
    createTable(line, lines)
}




function createHeader(place, user) {
    place.innerHTML = ""

    let cont = document.createElement('div')
    let left = document.createElement('div')
    let a1 = document.createElement('a')
    let a2 = document.createElement('a')
    let a3 = document.createElement('a')

    let right = document.createElement('div')
    let a4 = document.createElement('a')
    let button = document.createElement('button')
    let img = document.createElement('img')

    cont.classList.add('cont')
    left.classList.add('left_side')
    right.classList.add('right_side')
    a1.innerHTML = "Главная"
    a2.innerHTML = "Мои кошельки"
    a3.innerHTML = "Мои транзакции"
    a4.innerHTML = user.email
    img.src = '/icons/logout_FILL0_wght400_GRAD0_opsz24.svg'

    place.append(cont)
    cont.append(left, right)
    left.append(a1, a2, a3)
    right.append(a4, button)
    button.append(img)
}

function addCard(place, arr) {
    place.innerHTML = ""



    if (arr.length > 4) {
        arr.splice(4)
    }
    for (let item of arr) {
        let card = document.createElement('div')
        let h3 = document.createElement('h3')
        let p = document.createElement('p')


        card.classList.add('card')
        h3.classList.add('cardType')
        h3.innerHTML = "Visa"
        p.classList.add('currency')
        p.innerHTML = "RUB"

        // card.style.background = `linear-gradient(90deg, rgba(${r},${g},${b},1) ${pr + 14}%, rgba(${r},${g},${b},1) ${pr + 64}%); !important`

        // var randomGradient = getRandomGradient();

        let idx = arr.indexOf(item)

        place.append(card)
        card.append(h3, p)

    }
}

function createTable(place, arr, user) {
    // place.innerHTML = ""

    if (arr.length > 4) {
        arr.splice(7)
    }
    for (let item of arr) {
        let tr = document.createElement('tr')

        for (let i = 0; i < 5; i++) {
            let td = document.createElement('td')

            td.innerHTML = i + 1
            tr.append(td)
        }

        place.append(tr)
    }

}
