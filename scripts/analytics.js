import { getData, postData } from "/modules/helpers"

let select = document.querySelector('#wallettype')
let form = document.forms.registrationForm
let user = JSON.parse(localStorage.getItem('user'))
let inps = document.querySelectorAll('input')


getData('/wallets?user_id' + user.id)
    .then(res => {
        for(let item of res.data) {
            let opt = new Option(item.name)

            select.append(opt)
        }
    })

let patterns = {
    wallettype: /^[a-z ,.'-]+$/i,
    category: /^[a-z ,.'-]+$/i,
    summary: /^[0-9][A-Za-z0-9 -]*$/
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

    let fm = new FormData(e.target)

    let transaction = {
        user_id: user?.id,

    }

    fm.forEach((val, key) => {
        transaction[key] = val
    })

    postData('/transactions', transaction)
        .then(res => {
            console.log(res)
        })
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            alert('Success')
            location.assign('/pages/transactions/')
        }
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
        // submit()
        alert('Success')
        location.assign('/pages/transactions/')
    }
}



