import { $axios } from "../axios";

export const getLatestNews = async () => {
  return await $axios.get("/news/latest");
};
export const getFeaturedNews = async () => {
  return await $axios.get("/news/featured");
};
