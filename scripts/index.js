// headers 
let container_header = document.querySelector('.container_header')

// create
let header = document.createElement('header')
let nav = document.createElement('nav')
let a_home = document.createElement('a')
let a_my_wallets = document.createElement('a')
let a_transactions = document.createElement('a')
let account = document.createElement('div')
let a_account = document.createElement('a')
let a_svg = document.createElement('a')
let svg_img = document.createElement('img');

// styling
header.classList.add('header')
nav.classList.add('navbar')
account.classList.add('account')
a_home.classList.add('active')

a_home.setAttribute('href', '#')
a_my_wallets.setAttribute('href', '/pages/wallet/')
a_transactions.setAttribute('href', '/pages/transaction/')

a_home.innerHTML = 'Главная'
a_my_wallets.innerHTML = 'Мои кошельки'
a_transactions.innerHTML = 'Мои транзакции'
a_account.innerHTML = 'baxtzod@gmail.com'

a_account.setAttribute('href', '#')
a_svg.setAttribute('href', '/pages/signup/')
svg_img.setAttribute('src', '/icons/icon_logout.svg')
svg_img.setAttribute('alt', 'icon log out')

// append
container_header.append(header)
header.append(nav, account)
nav.append(a_home, a_my_wallets, a_transactions)
account.append(a_account, a_svg, svg_img)
a_svg.append(svg_img)


// credit cards

// let cont2 = document.querySelector('.container2')

// for (let i = 0; i < 4; i++) {
//     cont2.innerHTML = ''

//     // create
//     let center = document.createElement('div')
//     let first_span1 = document.createElement('div')
//     let second_span1 = document.createElement('div')
//     let my_credit_card1 = document.createElement('div')
//     let my_credit_card2 = document.createElement('div')
//     let my_credit_card3 = document.createElement('div')
//     let my_credit_card4 = document.createElement('div')

//     // styling
//     center.classList.add('center')
//     first_span1.classList.add('first_span')
//     second_span1.classList.add('second_span')
//     my_credit_card1.classList.add('my_credit_card1')
//     my_credit_card2.classList.add('my_credit_card2')
//     my_credit_card3.classList.add('my_credit_card3')
//     my_credit_card4.classList.add('my_credit_card4')

//     first_span1.innerHTML = 'Visa'
//     second_span1.innerHTML = 'Rub'

//     // append
//     cont2.append(center)
//     center.append(my_credit_card1, my_credit_card2, my_credit_card3, my_credit_card4)
//     my_credit_card1.append(first_span1, second_span1)
// }


let cont2 = document.querySelector('.container2')

let centerDiv = document.createElement('div');
centerDiv.classList.add('center');

for (let i = 1; i <= 4; i++) {
    cont2.innerHTML = ''

    let creditCardDiv = document.createElement('div');
    creditCardDiv.classList.add(`my_credit_card${i}`);

    let firstSpanDiv = document.createElement('div');
    firstSpanDiv.classList.add('first_span');
    firstSpanDiv.innerHTML = 'Visa';

    let secondSpanDiv = document.createElement('div');
    secondSpanDiv.classList.add('second_span');
    secondSpanDiv.innerHTML = 'RUB';

    creditCardDiv.append(firstSpanDiv);
    creditCardDiv.append(secondSpanDiv);

    centerDiv.append(creditCardDiv);
}



cont2.append(centerDiv);


// tables

// let cont3 = document.querySelector('.container3')

// for (let i = 0; i < 4; i++) {

//     // create
//     let table = document.createElement('table');
//     let thead = document.createElement('thead');
//     let tr_thead = document.createElement('tr');
//     let th1 = document.createElement('th')
//     let th2 = document.createElement('th')
//     let th3 = document.createElement('th')
//     let th4 = document.createElement('th')
//     let th5 = document.createElement('th')
//     let tbody = document.createElement('tbody');
//     let tr = document.createElement('tr');
//     let td1 = document.createElement('td');
//     let td2 = document.createElement('td');
//     let td3 = document.createElement('td');
//     let td4 = document.createElement('td');
//     let td5 = document.createElement('td');

//     // styling
//     th1.innerHTML = 'ID'
//     th2.innerHTML = 'Отправлено с кошелька'
//     th3.innerHTML = 'Категория'
//     th4.innerHTML = 'Сумма транзации'
//     th5.innerHTML = 'Когда'
//     td1.innerHTML = '1232312'
//     td2.innerHTML = 'VISA'
//     td3.innerHTML = 'Автомобиль'
//     td4.innerHTML = '414,000,000'
//     td5.innerHTML = '4 дня назад'

//     // append 
//     cont3.append(table);
//     table.append(thead, tbody);
//     thead.append(tr_thead);
//     tr_thead.append(th1, th2, th3, th4)
//     tbody.append(tr)
//     tr.append(td1, td2, td3, td4);
// }


let cont3 = document.querySelector('.container3');

for (let i = 0; i < 1; i++) {
    // create
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let th1 = document.createElement('th');
    let tr_thead = document.createElement('tr');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');
    let th4 = document.createElement('th');
    let th5 = document.createElement('th');

    // styling
    th1.innerHTML = 'ID';
    th2.innerHTML = 'Отправлено с кошелька';
    th3.innerHTML = 'Категория';
    th4.innerHTML = 'Сумма транзации';
    th5.innerHTML = 'Когда';

    // append
    thead.append(tr_thead);
    tr_thead.append(th1);
    tr_thead.append(th2);
    tr_thead.append(th3);
    tr_thead.append(th4);
    tr_thead.append(th5);

    let tbody = document.createElement('tbody');
    for (let k = 0; k < 7; k++) {
        // create
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');

        // styling
        td1.innerHTML = '1232312';
        td2.innerHTML = 'VISA';
        td3.innerHTML = 'Автомобиль';
        td4.innerHTML = '414,000,000';
        td5.innerHTML = '4 дня назад';

        // append
        tbody.append(tr);
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
    }

    table.append(thead);
    table.append(tbody);

    cont3.append(table);
}