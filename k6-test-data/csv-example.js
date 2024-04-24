import http from 'k6/http';

import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';

const csvData = papaparse.parse(open('data.csv'), {header: true}).data;

export const options = {
  vus: 3,
  duration: '3s',
};

export default function () {
  http.get('https://test-api.k6.io/public/crocodiles/');

  let random = Math.floor(Math.random() * csvData.length);

  console.log(`username: ${csvData[random].username}, psw: ${csvData[random].password}`);
}
