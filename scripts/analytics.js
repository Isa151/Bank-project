import {getData, postData} from "../modules/helpers.js";

const urlbackend = "http://localhost:9090/users";

getData(urlbackend)
    .then((res) => console.log(res.data))

let form = document.forms.login
let inps = document.querySelectorAll('input')

let patterns = {
    name: /^[a-z ,.'-]+$/i,
    category: /^[a-z ,.'-]+$/i,
    password: /^[0-9][A-Za-z0-9 -]*$/
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
        name: fm.get('name'),
        category: fm.get('category'),
        password: fm.get('password')
    }
    
    console.log(user);

    postData(urlbackend, user)
    .then((res) => {
        console.log(res.data);
    })
    .catch((error) => {
        console.error(error);
    });
}