import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

api.interceptors.request.use((config) => {
  /// auth token logic
  return config;
});

api.interceptors.response.use((response) => {
  /// response logic
  return response;
});

export default api;
