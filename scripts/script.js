const urlbackend = "http://localhost:9090/users";

axios.get(urlbackend)
    .then((res) => console.log(res.data))

function myFunction() {
    let x = document.getElementById("password");
    let show_and_hide = document.querySelector('.show_and_hide')

    if (x.type === "password") {
        x.type = "text";
        show_and_hide.innerHTML = 'Hide Password'
    } else {
        x.type = "password";
        show_and_hide.innerHTML = 'Show Password'
    }
}

// function saveRegistration() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const name = document.getElementById('name').value
//     const surname = document.getElementById('surname').value
//     localStorage.setItem('username', username);
//     localStorage.setItem('password', password);
//     localStorage.setItem('name', name);
//     localStorage.setItem('surname', surname);
//     // window.location.href = "login.html";
// }

// regex

let form = document.forms.login
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
        email: fm.get('email'),
        password: fm.get('password'),
        name: fm.get('name'),
        surname: fm.get('surname')
    }

    console.log(user);

    axios.post(urlbackend, user)
    .then((res) => {
        console.log(res.data);
    })
    .catch((error) => {
        console.error(error);
    });
}