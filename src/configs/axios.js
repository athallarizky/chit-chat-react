import axios from 'axios'

const instance = axios.create({
    baseURL: "https://chitchat-mulmed.herokuapp.com",
})

export default instance