import axios from 'axios';

const apiManager = axios.create({
  baseURL: "http://localhost:3000/",
  params: {
    format: "json"
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default apiManager;
