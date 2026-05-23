import axios from 'axios';
export const baseURL='http://chatapp.ap-south-1.elasticbeanstalk.com';
export const httpClient = axios.create({
  baseURL:baseURL,
});