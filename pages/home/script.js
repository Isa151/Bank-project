let container = document.querySelector(".container");
let my_wallets = document.querySelector(".my_wallets");
let my_transactions = document.querySelector(".my_transactions");

let cards = document.createElement("div");

cards.classList.add("cards");
my_wallets.append(cards);

let card_arr = {
  id: Math.random(),
  name: "Visa",
  valuta: "RUB", 
};
let transaction_arr = {
  id: "1232312",
  send: "Visa",
  category: "Автомобиль",
  amount: "414.000.000",
  time: "4 дня назад",
};

reload(cards);
function reload(arr) {
  for (var i = 0; i < 4; i++) {
    let card = document.createElement("div");
    let cards_name = document.createElement("h3");
    let cards_currency = document.createElement("h4");

    card.classList.add("card");

    cards_name.innerHTML = card_arr.name;
    cards_currency.innerHTML = card_arr.valuta;

    cards.append(card);
    card.append(cards_name, cards_currency);
  }
  let view_all_wallets = document.createElement("a");
  view_all_wallets.classList.add("view_all_wallets");
  view_all_wallets.innerHTML = "Смотреть все кошельки";
  view_all_wallets.href = "#";
  // container.append(view_all_wallets)

  let h2 = document.createElement("h2");
  let transactions_box = document.createElement("div");
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  let tr_thead = document.createElement("tr");
  // let tr_tbody = document.createElement("tr");

  transactions_box.classList.add("transactions_box");

  h2.innerHTML = "Последние транзакции";

  my_transactions.append(h2);
  my_transactions.append(transactions_box);
  transactions_box.append(table);
  table.append(thead, tbody);
  thead.append(tr_thead);
  // tbody.append(tr_tbody);

  let th1 = document.createElement("th");
  let th2 = document.createElement("th");
  let th3 = document.createElement("th");
  let th4 = document.createElement("th");
  let th5 = document.createElement("th");

  th1.innerHTML = "ID";
  th2.innerHTML = "Отправлено с кошелька";
  th3.innerHTML = "Категория";
  th4.innerHTML = "Сумма транзации";
  th5.innerHTML = "Когда";

  tr_thead.append(th1, th2, th3, th4, th5);

  for (var i = 0; i < 7; i++) {
  let tr_tbody = document.createElement("tr");
  
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  
  td1.innerHTML = transaction_arr.id
  td2.innerHTML = transaction_arr.send
  td3.innerHTML = transaction_arr.category
  td4.innerHTML = transaction_arr.amount
  td5.innerHTML = transaction_arr.time
  
  tbody.append(tr_tbody);
  tr_tbody.append(td1,td2,td3,td4,td5)
}
let all_payments = document.createElement("a");

all_payments.classList.add("all_payments")

all_payments.href = "pages/my transactions/"
all_payments.innerHTML = "Смотреть все оплаты"

my_transactions.append(all_payments)
}
