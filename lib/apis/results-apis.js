import { $axios } from "../axios";

export const getResults = async () => {
  return await $axios.get("/results");
};

export const createResult = async (values) => {
  return await $axios.post("/matchresult/create", values);
};
