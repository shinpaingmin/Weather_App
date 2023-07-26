import axios from "axios";

export const api = axios.create(
    {
        baseURL: 'https://api.openweathermap.org/data/2.5'
    }
);

export const api_key = '//generate your own api key and add it here';
