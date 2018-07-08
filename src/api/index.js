import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseUrl: 'http://127.0.0.1:8080', // process.env.BASE_URL
  timeout: 5000
})

export default service
