import { getData } from "../../modules/helpers";

// export let wallets = []

const form = document.forms.signin;
let inps = document.querySelectorAll('input')

let patterns = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    password: /^[0-9]/
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
    }

    getData('/users?email=' + user.email)
        .then(res => {
            if(res.data.length > 0) {
                if(res.data[0].password === user.password) {
                    let copied_res = res.data[0]
                    delete copied_res.password
                    localStorage.setItem('user', JSON.stringify(copied_res))
                    location.assign('/')
                } else {
                    alert('Не верный пароль!')
                }
            } else {
                alert('Пользователь не найден!')
            }

            // getData('/wallets?user_id=' + res.data[0].id)
            //     .this(res => {
            //         wallets.push(res.data)
            //     })
            
            
        })
        
}

