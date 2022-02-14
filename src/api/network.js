import axios from 'axios';

//Url we get from env variable
export const baseUrl = 'https://salty-fjord-20749.herokuapp.com';

axios.defaults.headers.post['Content-Type'] = 'application/json';

//handle response
const handleResponse = (response) => {
  console.log('network', response);
  // return {
  //   error: false,
  //   data: response.data,
  //   status: response.status,
  // };
  return response;
};

//handle error
const handleError = (error) => {
  console.log(error);
  return {
    // error: true,
    // data: error,
    error,
  };
};

//Http method
export const get = (url, params) => {
  axios
    .get(baseUrl + url, { params })
    .then((response) => handleResponse(response))
    .catch((error) => handleError(error));
};

export const post = (url, payload) =>
  axios
    .post(baseUrl + url, payload)
    .then((response) => handleResponse(response))
    .catch((error) => handleError(error));

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
