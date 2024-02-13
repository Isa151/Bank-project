import vanillaTilt from "https://cdn.skypack.dev/vanilla-tilt@1.7.0";
import { getData } from "/modules/helpers"

let card = document.querySelector("#card");
VanillaTilt.init(card, {
    max: 10,
    speed: 1000,
    perspective: 700
});






