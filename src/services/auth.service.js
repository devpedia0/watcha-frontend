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

const authService = {
  facebookLogin,
  register,
  login,
  checkEmail,
  onRefresh,
};

export default authService;

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const { status, data } = error.response;
//     const originalReq = error.config;
//     if (status >= 400 && !localStorage.getItem('refreshToken')) {
//       let refresh;
//       try {
//         refresh = (
//           await api.post('/auth/token', null, {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem('refreshToken')}`,
//             },
//           })
//         ).data;
//         await localStorage.setItem('accessToken', refresh.access_token);
//         api.defaults.headers['Autorization'] = `Bearer ${refresh.access_token}`;
//         return await Axios(originalReq);
//       } catch (e) {
//         localStorage.clear();
//         window.location.href = '/';
//         throw new Error('Session has expired');
//       }
//     } else {
//       throw new Error(data.message);
//     }
//   }
// );
