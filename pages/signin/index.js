let inps = document.querySelectorAll('input')
let sign = document.querySelector('.signin')

let locale = JSON.parse(localStorage.getItem('email')) || null
console.log(locale);
let ms = {
    email: inps.value,
    password: inps.value
}
sign.onclick = () => {
    localStorage.setItem('email', JSON.stringify({
        email: email.value,
        password: password.value}))
}
let patterns = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g
}
inps.forEach(inp => {

    inp.onkeyup = () => {
        if(patterns[inp.name].test(inp.value)) {
            inp.classList.remove('error')
        } else {
            inp.classList.add('error')
        }
    }
}) 