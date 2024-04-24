import http from 'k6/http';

export const options = {
  vus: 3,
  duration: '3s',
};

export default function () {
  http.get('https://test-api.k6.io/public/crocodiles/');
}
