import {getData, postData} from "../modules/helpers.js";

getData('/wallets').then(res => console.log(r.data))

let form = document.forms.login
let inps = document.querySelectorAll('input')

let patterns = {
    name: /^[a-z ,.'-]+$/i,
    currency: /^[a-z ,.'-]+$/i,
    balance: /^\$?[0-9][0-9,]*[0-9]\.?[0-9]{0,2}$/i
}

inps.forEach(inp => {
    let parent = inp.parentElement

    inp.onkeyup = () => {
        if (patterns[inp.name].test(inp.value)) {
            parent.classList.remove('error-field')
        } else {
            parent.classList.add('error-field')
        }
    }
})

form.onsubmit = (e) => {
    e.preventDefault();
    let isError = false

    inps.forEach(inp => {
        let parent = inp.parentElement

        if (inp.value.length === 0 && parent.classList.contains('required') || parent.classList.contains('error-field')) {
            parent.classList.add('error-field')
            isError = true
        } else {
            parent.classList.remove('error-field')
        }
    })

    isError ? alert('Error') : submit();
}

function submit() {
    let fm = new FormData(form)

    let newWallet = {
        name: fm.get('name'),
        currency: fm.get('currency'),
        balance: fm.get('balance')
    }

    postData('/wallets', newWallet).then(res => console.log(r.data))
}