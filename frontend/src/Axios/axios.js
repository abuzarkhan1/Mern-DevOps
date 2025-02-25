import axios from "axios"
const instance = axios.create({
    baseURL:"http://54.172.240.64:8000/api"
})
export default instance
