import axios from "axios";

export const API_URL = `https://67066b5ca0e04071d226c948.mockapi.io/api/v1`;

const $api = axios.create({
    baseURL: API_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
    }
})

export default $api