import axios from 'axios';

axios.defaults.baseURL = 'http://222.111.195.42:8080/';

const register = (countryCode, name, email, password) => {
  return axios
    .post('/auth/signup', {
      countryCode,
      name,
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        console.log(response);
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

const login = (email, password) => {
  return axios
    .post('/auth/signin', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        console.log(response);
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

const checkEmail = (email) => {
  return axios
    .get('/users/email', {
      email,
    })
    .then((response) => {
      console.log(response);
      if (response.data.exist === true) {
        console.log('이미 가입된 이메일입니다.');
        return response.data.exist;
      }
    })
    .catch((error) => error);
};

const facebookLogin = (accessToken) => {
  return axios
    .post('/auth/facebook', {
      accessToken,
    })
    .then((response) => {
      if (response.data.accessToken) {
        console.log(response);
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
  checkEmail,
};
