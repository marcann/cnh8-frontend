import axios from 'axios';
import nasa from '../../private/api/nasa.json';
const BASE_URL = 'https://api.nasa.gov';
const API_KEY = nasa["api-key"];

export class NASAService {

    constructor() {
    }

    APOD() {
        const url = `${BASE_URL}/planetary/apod?api_key=${API_KEY}`;
        //let yesterday = ( d => new Date(d.setDate(d.getDate()-1)))(new Date);

        return axios.get(url).then(response => response.data );
    }

    DONKI() {
        const url = `${BASE_URL}/DONKI/notifications?api_key=${API_KEY}`;

        return axios.get(url).then(response => response.data );
    }


}