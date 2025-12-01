import axios from "axios"


export const api = axios.create({
    baseURL: "https://web.dragonball-api.com/api/"
})