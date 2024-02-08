export function createHeader(place) {
    const { pathname } = location

    // create
    let header = document.createElement('header')
    let nav = document.createElement('nav')
    let a_home = document.createElement('a')
    let a_my_wallets = document.createElement('a')
    let a_transactions = document.createElement('a')
    let account = document.createElement('div')
    let a_account = document.createElement('a')
    /* let a_svg = document.createElement('a')
    let svg_img = document.createElement('div'); */

    // styling
    header.classList.add('header')
    nav.classList.add('navbar')
    account.classList.add('account')

    if (pathname === "/") {
        a_home.classList.add('active')
    } else if (pathname.includes('wallet')) {
        a_my_wallets.classList.add('active')
    } else {
        a_transactions.classList.add('active')
    }

    a_home.setAttribute('href', '/')
    a_my_wallets.setAttribute('href', '/pages/wallets/')
    a_transactions.setAttribute('href', '/pages/transactions/')

    a_home.innerHTML = 'Главная'
    a_my_wallets.innerHTML = 'Мои кошельки'
    a_transactions.innerHTML = 'Мои транзакции'

    /* a_account.innerHTML = 'Sign up' */
    a_account.innerHTML = JSON.parse(localStorage.getItem('user')).email;
    /* let storedUserEmail = JSON.parse(localStorage.getItem('user'));
    a_account.innerHTML = storedUserEmail.email; */

    // svg_img.innerHTML = 'Sign in'

    a_account.setAttribute('href', '#')
    a_account.setAttribute('href', '/pages/signup/')
    // a_svg.setAttribute('href', '/pages/signin/') 
    // append
    place.append(header)
    header.append(nav, account)
    nav.append(a_home, a_my_wallets, a_transactions)
    account.append(a_account) // a_svg, svg_img
    // a_svg.append(svg_img)
}

function getGradient() {
    "rgb(212,12,12)"

    function rnd() {
        return Math.floor(Math.random() * 255)
    }

    return `rgb(${rnd()}, ${rnd()}, ${rnd()})`
}

export function reload_wallets(arr, place) {
    place.innerHTML = ''

    for (let item of arr) {
        let creditCardDiv = document.createElement('div');
        let secondSpanDiv = document.createElement('div');
        let firstSpanDiv = document.createElement('div');

        creditCardDiv.style.background = `linear-gradient(84deg, ${getGradient()} 2.27%, ${getGradient()} 92.26%)`
        creditCardDiv.classList.add(`my_credit_card`);
        firstSpanDiv.classList.add('first_span');
        firstSpanDiv.innerHTML = item.name;
        secondSpanDiv.classList.add('second_span');
        secondSpanDiv.innerHTML = item.сurrency;

        creditCardDiv.append(firstSpanDiv);
        creditCardDiv.append(secondSpanDiv);
        place.append(creditCardDiv);
    }

}

export function reload_table(arr, place) {
    place.innerHTML = ''

    for (let item of arr) {
        // create
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');

        // styling
        td1.innerHTML = item.id;
        td2.innerHTML = item.from_the_wallet;
        td3.innerHTML = item.category;
        td4.innerHTML = item.total;
        td5.innerHTML = item.data;

        // append
        place.append(tr);
        tr.append(td1, td2, td3, td4, td5);
    }
}

export function storedUserData() {
    let storedUserData = JSON.parse(localStorage.getItem('user'));
    document.getElementById('name').innerHTML = 'Добро пожаловать, ' + storedUserData.name + ' ' + storedUserData.surname;
}

export function storedUserEmail() {
    let storedUserEmail = JSON.parse(localStorage.getItem('user'));
    document.getElementById('email').innerHTML = ' ' + storedUserEmail.email;
}