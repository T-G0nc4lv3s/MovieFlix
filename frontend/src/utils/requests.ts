import qs from 'qs';
import axios from 'axios';

export const BASE_URL =   process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'bds06';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'bds06123';

type LoginData = {
   username : String,
   password : String,
}

export const requestBackendLogin = (loginData : LoginData) => {

    const headers = {

        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET)
    }

    const data = qs.stringify({
        ...loginData,
        grant_type: 'password',
    });

    return axios({method: 'POST', baseURL: BASE_URL, url: '/oauth/token', data, headers});
}