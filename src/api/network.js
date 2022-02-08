import axios from 'axios';

//Url we get from env variable
export const baseUrl = 'http://localhost:8080/api/';

//handle response
const handleResponse = (response) => {
  return {
    error: false,
    data: response.data,
  };
};

//handle error
const handleError = (error) => {
  return {
    error: true,
    data: error,
  };
};

//Http methoda
export const get = (url, params) => {
  axios
    .get(baseUrl + url, { params })
    .then((response) => handleResponse(response))
    .catch((error) => handleError(error));
};

export const post = (url, payload) => {
  axios
    .post(baseUrl + url, payload)
    .then((response) => handleResponse(response))
    .catch((error) => handleError(error));
};

export const put = (url, payload) => {
  axios
    .put(baseUrl + url, payload)
    .then((response) => handleResponse(response))
    .catch((error) => handleError(error));
};

export const remove = (url, payload) => {
  axios
    .delete(baseUrl + url, payload)
    .then((response) => handleResponse(response))
    .catch((error) => handleError(error));
};
