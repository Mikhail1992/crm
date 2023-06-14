import axios from 'axios';
import { assocPath } from 'ramda';

const httpRequest = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://localhost:8080',
});

httpRequest.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken') || '';

    if (accessToken) {
      config = assocPath(['headers', 'authorization'], accessToken, config);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// httpRequest.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   async (err) => {
//     const originalConfig = err.config;
//     if (originalConfig.url !== '/api/users/register' && err.response) {
//       if (err.response.status === 401 && !originalConfig._retry) {
//         originalConfig._retry = true;
//         try {
//           const { accessToken } = await fetchToken();
//           localStorage.setItem('accessToken', accessToken);
//           return api(originalConfig);
//         } catch (_error) {
//           return Promise.reject(_error);
//         }
//       }
//     }
//     return Promise.reject(err);
//   },
// );

export default httpRequest;
