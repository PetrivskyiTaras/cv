import axios from 'axios';

const http = axios.create({
  timeout: 30000,
  adapter: 'fetch',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;
