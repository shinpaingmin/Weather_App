import axios from "axios";

export const api = axios.create(
    {
        baseURL: 'https://api.openweathermap.org/data/2.5'
    }
);

export const api_key = 'c1a34462602cf79e7c7370a0189a9d35';