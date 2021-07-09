import axios from 'axios'

const baseUrl = 'http://localhost:3306'

const login = async credentials => {
    const response = axios.post(baseUrl, credentials)
    return response.data
}

export default {login}