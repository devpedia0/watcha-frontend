// import { API_BASE_URL, ACCESS_TOKEN } from './constants/ index';

// const request = (options) => {
//   const headers = new Headers({
//     'Content-Type': 'application/json',
//   });
// };

// if (localStorage.getItem(ACCESS_TOKEN)) {
//   headers.append(
//     'Authorization',
//     'Bearer' + localStorage.getItem(ACCESS_TOKEN)
//   );
// }

// const defaults = { headers: headers };
// options = Object.assign({}, defaults, options);

// return fetch(options.url, options).then((res) =>
//   res.json().then((json) => {
//     if (!res.ok) {
//       return Promise.reject(json);
//     }
//     return json;
//   })
// );
