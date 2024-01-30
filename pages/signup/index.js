import {
    getData,
    postData
} from "../../modules/helpers";
const form = document.forms.signup

let signup = document.querySelector('.signup')

form.onsubmit = (e) => {
    e.preventDefault();

    let fm = new FormData(e.target)

    let user = {}

    fm.forEach((val, key) => {
        user[key] = val
    })

    if (user.email && user.password && user.name && user.surname) {
        getData('/users?email=' + user.email)
            .then(res => {
                if (res.status === 200 || res.status === 201) {
                    if (res.data.length !== 0) {
                        // alert('user already registered')
                        signup.setAttribute("href", "/pages/home/")
                        return
                    }

                    postData('/users', user)
                        .then(res => {
                            if (res.status === 200 || res.status === 201) {
                                location.assign('/pages/signin/')
                            }
                        })
                }
            })

    } else {
        alert('Fill all of these inputs')
    }
}
let inps = document.querySelectorAll('input')
let next = document.querySelector('.next')

let newW = document.querySelector('.new')

let locale = JSON.parse(localStorage.getItem(ms)) || null

let ms = {
    email: inps.value,
    name: inps.value,
    surname: inps.value,
    password: inps.value
}
next.onclick = () => {
    localStorage.setItem(ms, JSON.stringify({
        email: email.value,
        name: name.value,
        surname: surname.value,
        password: password.value}))
        console.log(locale);
}
let patterns = {
    surname: /^[a-z ,.'-]+$/i,
    name: /^[a-z ,.'-]+$/i,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g
}
inps.forEach(inp => {

    inp.onkeyup = () => {
        if(patterns[inp.name].test(inp.value)) {
            inp.classList.remove('error')
        } else {
            inp.classList.add('error')
            alert('error!')
        }
    }
}) 