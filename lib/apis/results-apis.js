import { $axios } from "../axios";
export const getResults = async () => {
  return await $axios.get("/results");
};
