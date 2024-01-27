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