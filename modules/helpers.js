import axios from 'axios'

const BASE_URL = "http://localhost:9090"


export const getData = async (resourse) => {
    try {
        const res = await axios.get(BASE_URL + resourse)
    
        return res
    } catch(error) {
        alert(`${error.message}`)
    }
}


export const postData = async (resourse, body) => {
    try {
        const res = await axios.post(BASE_URL + resourse, body)
    
        return res
    } catch(error) {
        alert(`${error.message}`)
    }
}

// export const getRandomRGBA = function() {
//     var r = Math.floor(Math.random() * 256); // Красный канал (0-255)
//     var g = Math.floor(Math.random() * 256); // Зеленый канал (0-255)
//     var b = Math.floor(Math.random() * 256); // Синий канал (0-255)
//     var a = Math.random(); // Альфа-канал (0-1)

//     return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
// }

// export const getRandomGradient = function() {
//     var color1 = getRandomRGBA(); // Первый цвет
//     var color2 = getRandomRGBA(); // Второй цвет

//     var angle = 90; // Угол направления градиента (0-360 градусов)

//     return "linear-gradient(" + angle + "deg, " + color1 + ", " + color2 + ")";
// }