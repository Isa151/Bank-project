import axios from 'axios'

const BASE_URL = "http://localhost:9090"

export const getData = async (resourse) => {
    try {
        return await axios.get(BASE_URL + resourse)
    } catch(error) {
        alert(`${error.message}`)
    }
}


export const postData = async (resourse, body) => {
    try {
       return await axios.post(BASE_URL + resourse, body)
    } catch(error) {
        alert(`${error.message}`)
    }
}