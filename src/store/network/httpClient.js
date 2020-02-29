import axios from 'axios';
import {stringify} from 'qs';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': process.env.REACT_APP_API_KEY
  },
  paramsSerializer: (params) =>
    stringify(params, {
      arrayFormat: 'comma'
    })
});

export default httpClient;
