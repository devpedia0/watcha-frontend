import axios from 'axios';
import api from './api';

const register = (countryCode, name, email, password) => {
  return api.post('/auth/signup', {
    countryCode,
    name,
    email,
    password,
  });
};

const login = (email, password) => {
  return api
    .post('/auth/signin', {
      email,
      password,
    })
    .then((response) => {
      if (response.headers) {
        localStorage.setItem(
          'accessToken',
          JSON.stringify(response.headers.authorization)
        );
        localStorage.setItem(
          'refreshToken',
          JSON.stringify(response.headers.refreshtoken)
        );
      }
      return response;
    })
    .catch((error) => alert(error));
};

const onRefresh = (Token) => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (accessToken === null && refreshToken !== null) {
    return api
      .post('auth/token', { params: { refreshToken: refreshToken } })
      .then((response) =>
        localStorage.setItem(
          'accessToken',
          JSON.stringify(response.headers.authorization)
        )
      );
  }
  return api
    .post('/auth/token', localStorage.getItem('refreshToken'))
    .then((response) => {})
    .catch((error) => {
      console.log('refreshError', error);
    });
};

const checkEmail = (email) => {
  return api.get('/public/email', {
    params: {
      email: email,
    },
  });
};

const facebookLogin = (accessToken) => {
  return api
    .post('/auth/facebook', {
      accessToken,
    })
    .then((response) => {
      if (response) {
        localStorage.setItem('facebookUser', JSON.stringify(response.data));
      }
      return response;
    });
};

const getUserInfo = () => {
  return api.get('/users/me').then((response) => {
    if (response) {
      return response;
    }
  });
};

const getUserRating = () => {
  return api.get('/users/me/ratings').then((response) => {
    if (response) {
      return response;
    }
  });
};

const setUserInfo = () => {
  return api.put('/users/me').then((response) => {
    JSON.parse(response);
    return response;
  });
};

const authService = {
  facebookLogin,
  register,
  login,
  checkEmail,
  onRefresh,
  getUserInfo,
  setUserInfo,

  getUserRating,
};

export default authService;
