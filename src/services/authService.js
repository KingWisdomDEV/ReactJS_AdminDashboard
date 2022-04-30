import http from './httpClient';

const getUserList = () => http.get('/users');

const login = (username, password) => http.get('/users', { params: { username, password } });

export { getUserList, login };
