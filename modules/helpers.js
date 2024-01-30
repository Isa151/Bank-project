import axios from 'axios'

const BASE_URL = "http://localhost:9000"


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