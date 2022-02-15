import axios from 'axios';
import { getItemFromLocalStorage } from '../utils/helper';

//Url we get from env variable
export const baseUrl = 'https://salty-fjord-20749.herokuapp.com/';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.request.use(
  function (config) {
    let authToken = {};
    const token = getItemFromLocalStorage('Authorization');

    if (token) {
      authToken.Authorization = token;
    }

    return {
      ...config,
      headers: {
        ...config.headers,
        ...authToken,
      },
    };
  },
  function (error) {
    return Promise.reject(error);
  },
);

//Http methods
export const get = (url, params) => axios.get(baseUrl + url, { params });

export const post = (url, payload) => axios.post(baseUrl + url, payload);

export const put = (url, payload) => axios.put(baseUrl + url, payload);

export const remove = (url, payload) => axios.delete(baseUrl + url, payload);
