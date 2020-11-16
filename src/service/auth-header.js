export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    return { Authorization: 'Bearer' + user.accessToken };
  } else {
    return {};
  }
}

// const request = (option) => {
//   const header = new Header({
//     'Content-Type': 'application/json',
//   });

//   if (localStorage.getItem(accessToken)) {
//     headers.append(
//       'Authorization',
//       'Bearer ' + localStorage.getItem(accessToken)
//     );
//   }

//   const defaults = { headers: headers };
//   options = Object.assign({}, defaults, options);
//   return fetch(options.url, option).then((response) =>
//     response.json().then((json) => {
//       if (!response.ok) {
//         return Promise.reject(json);
//       }
//       return json;
//     })
//   );
// };
