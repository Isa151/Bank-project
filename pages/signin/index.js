import {
    getData
} from "../../modules/helpers";

const form = document.forms.signin


export const start = function(obj) {
    console.log(obj);
}


form.onsubmit = (e) => {
    e.preventDefault();

    let fm = new FormData(e.target)

    let user = {}

    fm.forEach((val, key) => {
        user[key] = val
    })

    getData('/users?email=' + user.email)
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                if (res.data.length !== 0) {
                    console.log(res.data[0]);
                    if (user.password === res.data[0].password) {
                        location.href = "/index.html"
                        start(res.data[0])
                    } else {
                        alert('wrong password!');
                    }
                } else {
                    alert('firs you need to register')
                }
            }
        })
}



