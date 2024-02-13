let save = document.querySelector('.card-number-box')

save.innerHTML = localStorage.getItem('cardNumber')

document.querySelector('.card-number-input').oninput = () => {
    let cardNumber = document.querySelector('.card-number-input').value;
    document.querySelector('.card-number-box').innerHTML = cardNumber;
    localStorage.setItem('cardNumber', cardNumber);
}

let second_save = document.querySelector('.card-holder-name')

second_save.innerHTML = localStorage.getItem('cardNumber2')

document.querySelector('.card-holder-input').oninput = () => {
    let cardNumber2 = document.querySelector('.card-holder-input').value;
    document.querySelector('.card-holder-name').innerHTML = cardNumber2;
    localStorage.setItem('cardNumber2', cardNumber2);
}

let thrid_save = document.querySelector('.exp-month')

thrid_save.innerHTML = localStorage.getItem('cardNumber3')

document.querySelector('.month-input').oninput = () => {
    let cardNumber3 = document.querySelector('.month-input').value;
    document.querySelector('.exp-month').innerHTML = cardNumber3;
    localStorage.setItem('cardNumber3', cardNumber3);
}

let fourth_save = document.querySelector('.exp-year')

fourth_save.innerHTML = localStorage.getItem('cardNumber4')

document.querySelector('.year-input').oninput = () => {
    let cardNumber4 = document.querySelector('.year-input').value;
    document.querySelector('.exp-year').innerHTML = cardNumber4;
    localStorage.setItem('cardNumber4', cardNumber4);
}

document.querySelector('.cvv-input').onmouseenter = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

fifth_save = document.querySelector('.cvv-box')

fifth_save.innerHTML = localStorage.getItem('cardNumber5')

document.querySelector('.cvv-input').oninput = () => {
    let cardNumber5 = document.querySelector('.cvv-input').value;
    document.querySelector('.cvv-box').innerHTML = cardNumber5;
    localStorage.setItem('cardNumber5', cardNumber5);
}

VanillaTilt.init(document.querySelector(".front"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5
});

