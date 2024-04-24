import http from 'k6/http';

export const options = {
  vus: 3,
  duration: '3s',
};

const usernames = ['user1','user3','admin'];
const passwords = ['123123','qwerty','qweqweqwe'];

export default function () {
  http.get('https://test-api.k6.io/public/crocodiles/');
  let random = Math.floor(Math.random() * usernames.length);

  console.log(`username: ${usernames[random]}, psw: ${passwords[random]}`);
}
