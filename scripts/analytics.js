import { getData, patchData, postData } from "../modules/helpers"

const select = document.querySelector('#сurrency')
const user = JSON.parse(localStorage.getItem('user')) || null
let form = document.forms.add_transaction
let inps = document.querySelectorAll('input')
let wallets = []

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
        user_id: user?.id,
        created_at: new Date().toLocaleDateString('uz-UZ', { hour12: false }),
        updated_at: new Date().toLocaleDateString('uz-UZ', { hour12: false })
    }

    fmm.forEach((val, key) => {
        transaction[key] = val
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
        let findedWallet = wallets.find(wallet => wallet.id === transaction.wallet)
        delete findedWallet.user_id

        transaction.wallet = findedWallet

        patchData('/wallets/' + findedWallet.id, {
            balance: findedWallet.balance - transaction.total
        })
            .then(res => {
                if(res.status === 200 || res.status === 201) {
                    postData('/transactions', transaction)
                        .then(res => {
                            if(res.status === 200 || res.status === 201) {
                                alert('succses')
                                location.assign('/pages/transactions/')
                            }
                        })
                }
            })
            


        // alert('Success')
        // location.assign('/pages/transactions/')
    }
}





getData('/wallets?user_id=' + user.id)
    .then(res => {
        wallets = res.data
        for (let item of res.data) {
            let opt = new Option(item.name, item.id)

            select.append(opt)
        }
    })
