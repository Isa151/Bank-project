import { postData } from "../../modules/helpers";
import { getSymbols } from "/modules/helpers";

const select = document.querySelector('#сurrency')
const form = document.forms.add_wallet
const user = JSON.parse(localStorage.getItem('user'))
let inps = document.querySelectorAll('input')

let patterns = {
    name: /^[a-z ,.'-]+$/i,
    currency: /^[a-z ,.'-]+$/i,
    balance: /^[0-9][A-Za-z0-9 -]*$/
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

    const fm = new FormData(e.target)

    const wallet = {
        user_id: user?.id,
    }

    fm.forEach((val, key) => wallet[key] = val)

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

    if (isError) {
        alert('Error')
    } else {
        postData('/wallets', wallet)
            .then(res => {
                if (res.status === 200 || res.status === 201) {
                    alert('Success')
                    location.assign('/pages/wallets/')
                }
            })
    }
}

getSymbols()
    .then(res => {
        for (let key in res) {
            let opt = new Option(key + " - " + res[key], key)

            select.append(opt)
        }
    })
