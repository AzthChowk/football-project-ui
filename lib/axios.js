import axios from "axios";

export const $axios = axios.create({
  baseURL:
    import.meta.env.VITE_ENV === "local"
      ? import.meta.env.VITE_API_LOCAL
      : import.meta.env.VITE_API_PROD,
  timeout: 1000,
});

$axios.interceptors.request.use(function (config) {
  const accesstoken = localStorage.getItem("accesstoken");
  if (accesstoken) {
    config.headers.Authorization = `Bearer ${accesstoken}`;
  }
  return config;
});
