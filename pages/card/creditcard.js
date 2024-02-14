import axios from "axios";
import { getData, getSymbols } from "../../modules/helpers";

const user_id = location.search.split('=').at(-1)
const item_name = document.getElementById('item_name')
const item_currency = document.getElementById('item_currency')
const item_balance = document.getElementById('item_balance')
const select_currecny = document.getElementById('currencies')
const from_view = document.querySelector('#from')
const to_view = document.querySelector('#to')
const total_view = document.querySelector('#total')
const first_currecny = document.querySelector('#first_currencies')
const credit_cart = document.querySelector('#cards')
let wallet = null

getData('/wallets/' + user_id)
    .then(res => {
        item_name.innerHTML = `Card Name: ${res.data.name}`
        item_currency.innerHTML = `Currency: ${res.data.сurrency}`
        item_balance.innerHTML = `Balance: ${Number(res.data.balance).toLocaleString('uz-UZ')}`
        first_currecny.innerHTML =`${res.data.сurrency}`
        credit_cart.innerHTML = `${res.data.name}`
        wallet = res.data
    })

getSymbols()    
    .then(res => {
        for(let key in res) {
            let opt = new Option(`${key} - ${res[key]}`, key)

            select_currecny.append(opt)
        }
    })


select_currecny.onchange = (e) => {
    let curr = e.target.value


    if(curr === "") return

    axios.get(`https://api.apilayer.com/fixer/convert?to=${curr}&from=${wallet.сurrency}&amount=${wallet.balance}`, {
        headers: {
            apikey: import.meta.env.VITE_API_KEY
        }
    })
    .then(res => {
        if(res.status === 200 || res.status === 201) {
            from_view.innerHTML = `С валюты ........ ${wallet.сurrency}`
            to_view.innerHTML = `На ................ ${curr}`
            total_view.innerHTML = res.data.result.toLocaleString('uz-UZ')
        }
    })

}

 
let save = document.querySelector('.card-number-box')

save.innerHTML = localStorage.getItem('cardNumber')

document.querySelector('.card-number-input').oninput = () => {
    let cardNumber = document.querySelector('.card-number-input').value;
    document.querySelector('.card-number-box').innerHTML = cardNumber;
    localStorage.setItem('cardNumber', cardNumber);
}

let second_save = document.querySelector('.card-holder-name')

second_save.innerHTML = localStorage.getItem('cardNumber2')

document.querySelector('.card-holder-input').oninput = () => {
    let cardNumber2 = document.querySelector('.card-holder-input').value;
    document.querySelector('.card-holder-name').innerHTML = cardNumber2;
    localStorage.setItem('cardNumber2', cardNumber2);
}

let thrid_save = document.querySelector('.exp-month')

thrid_save.innerHTML = localStorage.getItem('cardNumber3')

document.querySelector('.month-input').oninput = () => {
    let cardNumber3 = document.querySelector('.month-input').value;
    document.querySelector('.exp-month').innerHTML = cardNumber3;
    localStorage.setItem('cardNumber3', cardNumber3);
}

let fourth_save = document.querySelector('.exp-year')

fourth_save.innerHTML = localStorage.getItem('cardNumber4')

document.querySelector('.year-input').oninput = () => {
    let cardNumber4 = document.querySelector('.year-input').value;
    document.querySelector('.exp-year').innerHTML = cardNumber4;
    localStorage.setItem('cardNumber4', cardNumber4);
}

document.querySelector('.cvv-input').onmouseenter = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

let fifth_save = document.querySelector('.cvv-box')

fifth_save.innerHTML = localStorage.getItem('cardNumber5')

document.querySelector('.cvv-input').oninput = () => {
    let cardNumber5 = document.querySelector('.cvv-input').value;
    document.querySelector('.cvv-box').innerHTML = cardNumber5;
    localStorage.setItem('cardNumber5', cardNumber5);
}

VanillaTilt.init(document.querySelector(".front"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5
});
