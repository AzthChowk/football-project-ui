import axios from "axios";

export const $axios = axios.create({
  baseURL: "http://localhost:9090",
  timeout: 1000,
});

$axios.interceptors.request.use(function (config) {
  const accesstoken = localStorage.getItem("accesstoken");
  if (accesstoken) {
    config.headers.Authorization = `Bearer ${accesstoken}`;
  }
  return config;
});
