import axios from 'axios';

//Url we get from env variable
export const baseUrl = 'https://salty-fjord-20749.herokuapp.com/';

//handle response
const handleResponse = (response) => {
  console.log(response);
  return {
    error: false,
    data: response.data,
  };
};

//handle error
const handleError = (error) => {
  console.log(error);
  return {
    error: true,
    data: error,
  };
};

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

//Http methods
export const get = (url, params) =>
  axios
    .get(baseUrl + url, { params })
    .then((response) => handleResponse(response))
    .catch((error) => handleError(error));

export const post = (url, payload) =>
  axios
    .post(baseUrl + url, payload)
    .then((response) => handleResponse(response))
    .catch((error) => handleError(error));

export const put = (url, payload) =>
  axios
    .put(baseUrl + url, payload)
    .then((response) => handleResponse(response))
    .catch((error) => handleError(error));

export const remove = (url, payload) =>
  axios
    .delete(baseUrl + url, payload)
    .then((response) => handleResponse(response))
    .catch((error) => handleError(error));
