import axios from 'axios';

const API_URL = '222.111.195.42:8080/';

const register = (name, email, password) => {
  return axios
    .post(API_URL + 'signup', {
      name,
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

const login = (email, password) => {
  return axios
    .post(API_URL + 'signin', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

const facebookLogin = (accessToken) => {
  return axios
    .post(API_URL + 'oauth/facebook', {
      accessToken,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  facebookLogin,
  register,
  login,
  logout,
};
