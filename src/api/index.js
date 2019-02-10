import axios from 'axios';

// create an axios instance
const service = axios.create({
  baseUrl: 'http://proserver:3000', // process.env.BASE_URL
  timeout: 5000
});

export default service;
