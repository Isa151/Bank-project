import { getData, postData } from "../modules/helpers"

const select = document.querySelector('#сurrency')
let form = document.forms.add_transaction
const user = JSON.parse(localStorage.getItem('user')) || null
let inps = document.querySelectorAll('input')

let patterns = {
    from_the_wallet: /^[a-z ,.'-]+$/i,
    category: /^[a-z ,.'-]+$/i,
    total: /^[0-9][A-Za-z0-9 -]*$/
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

    let fmm = new FormData(e.target)

    let transaction = {
        card_id: String(Math.random()),
        user_id: user?.id,
        data: new Date().toLocaleDateString('uz-UZ', { hour12: false })
    }

    fmm.forEach((val, key) => {
        transaction[key] = val
    })

    postData('/transactions', transaction)
        .then(res => {
            console.log(res)
        })


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
        alert('Success')
        location.assign('/pages/transactions/')
    }
}

getData('/wallets?user_id=' + user.id)
    .then(res => {
        for (let item of res.data) {
            let opt = new Option(item.name)

            select.append(opt)
        }
    })
