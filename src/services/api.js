import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    "X-TOKEN": import.meta.env.VITE_TOKEN,
  },
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Akses ditolak: Token tidak valid!");
    }
    return Promise.reject(error);
  }
);

export default api;
