import http from 'k6/http';

const jsonData = JSON.parse(open('./data.json')).users;

export const options = {
  vus: 3,
  duration: '3s',
};

export default function () {
  http.get('https://test-api.k6.io/public/crocodiles/');

  let random = Math.floor(Math.random() * jsonData.length);

  console.log(`username: ${jsonData[random].username}, psw: ${jsonData[random].password}`);
}
