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
