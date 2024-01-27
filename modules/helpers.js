import axios from 'axios'

const BASE_URL = "http://localhost:9090"


export const postData = async (resourse, body) => {
    try {
        const res = await axios.post(BASE_URL + resourse, body)
    
        return res
    } catch(error) {
        alert(`${error.message}`)
    }
}