import {getData, postData} from "/modules/helpers.js";

getData('/transactions').then(r => console.log(r.data))


let form = document.forms.registrationForm
let inps = document.querySelectorAll('input')

let patterns = {
    summary: /^\$?[0-9][0-9,]*[0-9]\.?[0-9]{0,2}$/i,
    category:/^[a-z ,.'-]+$/i,
}





inps.forEach(inp => {
    let parent = inp.parentElement

    inp.onsubmit = () => {
        if (patterns[inp.summary] || patterns[inps.category].test(inp.value)) {
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

    let newTransaction = {
        wallettype: fm.get('wallettype'),
        summary: fm.get('summary'),
        category: fm.get('category')
    }

    postData('/transactions', newTransaction).then(r => console.log(r.data))
}

