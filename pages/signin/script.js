const url = 'http://localhost:9090';
const form = document.forms.signin;

const getData = async (resource) => {
    try {
        const res = await axios.get(url + resource);
        return res.data;
    } catch (error) {
        alert(`${error.message}`);
    }
}

form.onsubmit = async (e) => {
    e.preventDefault();

    let fm = new FormData(form)

    let user = {
        email: fm.get('email'),
        password: fm.get('password')
    }

    fm.forEach((val, key) => {
        user[key] = val
    })

    console.log(user);


    const validateSignIn = () => {
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        let storedEmail = localStorage.getItem('email');
        let storedPassword = localStorage.getItem('password');

        if (email === storedEmail && password === storedPassword) {
            alert('Success');
            location.assign('/pages/dashboard/');
            /* return true; */
        } else {
            alert('Not Success');
            /* return false; */
            location.assign('/pages/trainingsignup/');
        }
    }

    validateSignIn();
}

//

let inps = document.querySelectorAll('input')

let patterns = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
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

form.onsubmit_second = (e) => {
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
    }

    console.log(user);
}