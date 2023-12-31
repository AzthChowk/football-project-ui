import { $axios } from "../axios";

export const getLatestNews = async () => {
  return await $axios.get("/news/latest");
};
export const getFeaturedNews = async () => {
  return await $axios.get("/news/featured");
};

export const getAllNews = async () => {
  return await $axios.get("/news");
};
export const getFullNews = async (newsId) => {
  return await $axios.get(`/news/${newsId}`);
};
export const addNews = async (values) => {
  return await $axios.post("/news/create", values);
};
export const editNews = async (newsId, values) => {
  return await $axios.put(`/news/edit/${newsId}`, values);
};
export const deleteNews = async (newsId) => {
  return await $axios.delete(`/news/delete/${newsId}`);
};
export const getReporterNews = async (userId) => {
  return await $axios.post("/reporter/news", userId);
};
