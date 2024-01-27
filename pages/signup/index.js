
let btn = document.querySelector('button')
btn.onclick = () => {
    valForm()
}




const URL = 'http://localhost:9090/users'



function valForm() {
    let form = document.forms.register;
    let inputs = form.querySelectorAll('input');

    let pattern = {
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        firstName: /^[a-zA-Zа-яА-Я]+$/,
        lastName: /^[a-zA-Zа-яА-Я]+(-[a-zA-Zа-яА-Я]+)?$/,
        password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    };

    let isValid = true;

    inputs.forEach(inp => {
        if (inp.id === "showPassword") {
            return
        }
        if (pattern[inp.name].test(inp.value)) {
            inp.classList.remove('error');
            inp.classList.add('success');
        } else {
            inp.classList.remove('success');
            inp.classList.add('error');
            isValid = false;
        }
    });

 

    if (isValid) {
        saveDataToLocal();
    } else {
        alert("Пожалуйста, заполните все поля корректно.");
    }
}



function saveDataToLocal() {
    let user = {}

    let form = document.forms.register

    let fm = new FormData(form);

    fm.forEach((value, key) => {
        user[key] = value;
    })
    console.log(user)

    localStorage.setItem('user', JSON.stringify(user));
}

function valInput(input) {
    let pattern = {
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        firstName: /^[a-zA-Zа-яА-Я]+$/,
        lastName: /^[a-zA-Zа-яА-Я]+(-[a-zA-Zа-яА-Я]+)?$/,
        password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    }

    if (pattern[input.name].test(input.value)) {
        input.classList.remove('error');
        input.classList.add('success');
    } else {
        input.classList.remove('success');
        input.classList.add('error');
    }
}

let showPassword = document.querySelector('#showPassword')

showPassword.onclick = () => {
    togglePassword()
}

function togglePassword() {
    let passwordField = document.getElementById('password')
    let showPasswordCheckbox = document.getElementById('showPassword')

    if (showPasswordCheckbox.checked) {
        passwordField.type = 'text'
    } else {
        passwordField.type = 'password'
    }
}