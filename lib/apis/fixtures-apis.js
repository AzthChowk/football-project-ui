import { $axios } from "../axios";

export const getFixtureList = async () => {
  return await $axios.post("/fixtures");
};
