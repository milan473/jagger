import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer your-secret-bearer-token-12345"
  },
});

export default api;