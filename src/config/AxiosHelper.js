import axios from 'axios';
export const baseURL='https://chat-backend-4gcz.onrender.com';
export const httpClient = axios.create({
  baseURL:baseURL,
});
