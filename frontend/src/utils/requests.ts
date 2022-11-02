import qs from 'qs';
import axios, { AxiosRequestConfig } from 'axios';
import history from './history';
import jwtDecode from 'jwt-decode';

export const BASE_URL =
  process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'bds06';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'bds06123';

type Role = 'ROLE_MEMBER' | 'ROLE_VISITOR' | 'ROLE_ADMIN';

type TokenData = {
  exp: number;
  user_name: String;
  authorities: Role[];
}

type LoginData = {
  username: String;
  password: String;
};

type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  userId: number;
  username: string;
};

const tokenKey = 'authData';

export const requestBackendLogin = (loginData: LoginData) => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET),
  };

  const data = qs.stringify({
    ...loginData,
    grant_type: 'password',
  });

  return axios({
    method: 'POST',
    baseURL: BASE_URL,
    url: '/oauth/token',
    data,
    headers,
  });
};

export const saveAuthData = (obj: LoginResponse) => {
  localStorage.setItem(tokenKey, JSON.stringify(obj));
};

export const getAuthData = () => {
  const str = localStorage.getItem(tokenKey) ?? '{}';
  return JSON.parse(str) as LoginResponse;
};

export const requestBackend = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: 'Bearer ' + getAuthData().access_token,
      }
    : config.headers;

  return axios({ ...config, baseURL: BASE_URL, headers });
};

export const getTokenData = () : TokenData | undefined => {

  const loginResponse = getAuthData();
  try {
    return jwtDecode(loginResponse.access_token) as TokenData;
  } 
  catch (error) {
    return undefined;
  }
};

export const isAuthenticated = () : boolean => {
  const tokenData = getTokenData();

  return (tokenData && tokenData.exp * 1000 > Date.now()) ? true : false;
}

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401 || error.response.status === 403) {
      history.replace('/');
    }
    return Promise.reject(error);
  }
);


