import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL

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

export const patchData = async (resourse, body) => {
    try {
        const res = await axios.patch(BASE_URL + resourse, body)

        return res
    } catch(error) {
        alert(`${error.message}`)
    }
}




export const getSymbols = async () => {
    const symbs = localStorage.getItem('symbols')

    if(symbs) {
        return JSON.parse(symbs)
    }

    try {
        const res = await axios.get("https://api.apilayer.com/fixer/symbols", {
            headers: {
                apikey: import.meta.env.VITE_API_KEY
            }
        })

        if(res.status === 200 || res.status === 201) {
            localStorage.setItem('symbols', JSON.stringify(res.data.symbols))

            return res.data.symbols
        }
        
    } catch(e) {
        alert('Network error')
    }
}




