document.addEventListener('DOMContentLoaded', function () {
    loadDataFromLocal();
});


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



function loadDataFromLocal() {

    let userData = localStorage.getItem('user');

    if (userData) {
        userData = JSON.parse(userData);

        let form = document.forms.register;
        let inputs = form.querySelectorAll('input');

        inputs.forEach(inp => {
            if (userData[inp.name]) {
                inp.value = userData[inp.name];
                valInput(inp);  
            }
        });
    }
}

let showPassword = document.querySelector('#showPassword')

showPassword.onclick = () => {
    togglePassword() 
}

function togglePassword() {
    let passwordField = document.getElementById('password');
    let showPasswordCheckbox = document.getElementById('showPassword');

    if (showPasswordCheckbox.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}