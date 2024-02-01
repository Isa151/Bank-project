<<<<<<< HEAD
let inps = document.querySelectorAll('input')
let next = document.querySelector('.next')
let signup = document.querySelector('.signup')
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
=======
import { getData, postData } from "../../modules/helpers";
const form = document.forms.signup


form.onsubmit = (e) => {
    e.preventDefault();

    let fm = new FormData(e.target)

    let user = {}

    fm.forEach((val, key) => {
        user[key] = val
    })

    console.log(user);

    if (user.email && user.password && user.name && user.surname) {
        getData('/users?email=' + user.email)
            .then(res => {
                if (res.status === 200 || res.status === 201) {
                    if (res.data.length !== 0) {
                        alert('User already registered')
                        return
                    }

                    if (validateRegistration()) {
                        postData('/users', user)
                            .then(res => {
                                if (res.status === 200 || res.status === 201) {
                                    location.assign('/pages/signin/')
                                }
                            })
                    }

                }
            })

    } else {
        alert('Fill all of these inputs')
    }
}

//

function validateRegistration() {
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    localStorage.setItem('name', name);
    localStorage.setItem('surname', surname);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    return true;
}

//

let inps = document.querySelectorAll('input')

let patterns = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g
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

form.onsubmit_sec = (e) => {
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

    if (isError) {
        alert('Error')
    } else {
        submit()
    }
}

function submit() {
    let fm = new FormData(form)

    let user = {
        email: fm.get('email'),
        password: fm.get('password'),
        name: fm.get('name'),
        surname: fm.get('surname')
    }

    console.log(user);
}
>>>>>>> 3451063e9ed567c01da1123ff2857148516c31b0
