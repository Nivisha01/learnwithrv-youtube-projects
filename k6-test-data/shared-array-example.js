import http from 'k6/http';
import {SharedArray} from 'k6/data';

const sharedData = new SharedArray("Shared Credentials", function(){
  let data = JSON.parse(open('./data.json')).users;
  return data;
})

export const options = {
  vus: 3,
  duration: '3s',
};

export default function () {
  http.get('https://test-api.k6.io/public/crocodiles/');

  let random = Math.floor(Math.random() * sharedData.length);

  console.log(`username: ${sharedData[random].username}, psw: ${sharedData[random].password}`);
}
