import vanillaTilt from "https://cdn.skypack.dev/vanilla-tilt@1.7.0";
import { getData } from "/modules/helpers"

import axios from "axios";
import { getData, getSymbols } from "../../modules/helpers";

const user_id = location.search.split('=').at(-1)
const item_name = document.getElementById('name')
const item_currency = document.getElementById('currency')
const item_balance = document.getElementById('balance')
const select_currency = document.getElementById('currencies')
const from_view = document.querySelector('#from')
const to_view = document.querySelector('#to')
const total_view = document.querySelector('#total')
let wallet = null

getData('/wallets/' + user_id)
    .then(res => {
        item_name.innerHTML = `Card Name: ${res.data.name}`
        item_currency.innerHTML = `Currency: ${res.data.currency}`
        item_balance.innerHTML = `Balance: ${Number(res.data.balance).toLocaleString('uz-UZ')}`
        wallet = res.data
    })

getSymbols()
    .then(res => {
        for(let key in res) {
            let opt = new Option(`${key} - ${res[key]}`, key)

            select_currency.append(opt)
        }
    })


select_currency.onchange = (e) => {
    let curr = e.target.value


    if(curr === "") return

    axios.get(`https://api.apilayer.com/fixer/convert?to=${curr}&from=${wallet.currency}&amount=${wallet.balance}`, {
        headers: {
            apikey: import.meta.env.VITE_API_KEY
        }
    })
        .then(res => {
            if(res.status === 200 || res.status === 201) {
                from_view.innerHTML = `С валюты ........ ${wallet.currency}`
                to_view.innerHTML = `На ................ ${curr}`
                total_view.innerHTML = res.data.result.toLocaleString('uz-UZ')
            }
        })

}
let card = document.querySelector("#card");
VanillaTilt.init(card, {
    max: 10,
    speed: 1000,
    perspective: 700
});






