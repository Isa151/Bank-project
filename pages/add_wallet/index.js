import { postData } from "../../modules/helpers";
import { getSymbols } from "/modules/helpers";

const select = document.querySelector('#сurrency')
const form = document.forms.add_wallet
const user = JSON.parse(localStorage.getItem('user'))

form.onsubmit = (e) => {
    e.preventDefault();

    const fm = new FormData(e.target)
    
    const wallet = {
        user_id: user?.id,
        created_at: new Date().toLocaleDateString('uz-UZ', {hour12: false}),
        updated_at: new Date().toLocaleDateString('uz-UZ', {hour12: false}),
    }

    fm.forEach((val, key) => wallet[key] = val)

    postData('/wallets', wallet)
        .then(res => {
            if(res.status === 200 || res.status === 201) {
                alert('Success')
                location.assign('/pages/wallets/')
            }
        })
}

getSymbols()
    .then(res => {
        for(let key in res) {
            let opt = new Option(key + " - " + res[key], key)
            
            select.append(opt)
        }
    })
