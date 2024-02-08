import { getData, postData } from "../modules/helpers"

// const urlbackend = "http://localhost:9090/users";

// axios.get(urlbackend)
//     .then((res) => console.log(res.data))

const select = document.querySelector('#сurrency')
let form = document.forms.add_transaction
const user = JSON.parse(localStorage.getItem('user'))
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
    // .then(res => {
    //     if (res.status === 200 || res.status === 201) {
    //         alert('Success')
    //         location.assign('/pages/transactions/')
    //     }
    // })

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

// getData('/wallets')
//     .then(res => {
//         for (let key in res) {
//             let opt = new Option(key + " - " + res[key], key)

//             select.append(opt)
//         }
//     })

// function submit() {
//     let fm = new FormData(form)

//     let user = {
//         from_the_wallet: fm.get('from_the_wallet'),
//         category: fm.get('category'),
//         total: fm.get('total'),
//         data: new Date().toLocaleDateString('uz-UZ', { hour12: false })
//     }

//     console.log(user);

//     // axios.post(urlbackend, user)
//     // .then((res) => {
//     //     console.log(res.data);
//     // })
//     // .catch((error) => {
//     //     console.error(error);
//     // });
// }