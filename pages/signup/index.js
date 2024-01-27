import { postData } from "../../modules/helpers";
const form = document.forms.signup


form.onsubmit = (e) => {
    e.preventDefault();
    
    let fm = new FormData(e.target)

    let user = {}

    fm.forEach((val, key) => {
        user[key] = val
    })

    if(user.email && user.password && user.name && user.surname) {
        postData('/users', user)
            .then(res => {
                if(res.status === 200 || res.status === 201) {
                    location.assign('/pages/signin/')
                }
            })
    } else {
        alert('Fill all of these inputs')
    }
}


