let container = document.querySelector(".container");
let my_wallets = document.querySelector(".my_wallets");

let cards = document.createElement("div");
cards.classList.add("cards");
my_wallets.append(cards);

let card_arr = {
    id: Math.random(),
    name: "Visa",
    valuta: "RUB", 
  };

  reload(cards);
function reload(arr) {
  for (var i = 0; i < 7; i++) {
    let card = document.createElement("div");
    let cards_name = document.createElement("h3");
    let cards_currency = document.createElement("h4");

    card.classList.add("card");

    cards_name.innerHTML = card_arr.name;
    cards_currency.innerHTML = card_arr.valuta;

    cards.append(card);
    card.append(cards_name, cards_currency);
  } }