// import { requestFactory } from './requester';
import * as request from './requester';

const baseUrl = `http://localhost:3030/users`;

// export const authServiceFactory = (token) => {
//     const request = requestFactory(token);

//     return {
//         login: (data) => request.post(`${baseUrl}/login`, data),
//         register: (data) => request.post(`${baseUrl}/register`, data),
//         logout: () => request.get(`${baseUrl}/logout`),
//     }
// };


export const login = (data) => request.post(`${baseUrl}/login`, data);
export const register = (data) => request.post(`${baseUrl}/register`, data);


