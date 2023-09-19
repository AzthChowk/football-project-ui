import { $axios } from "../axios";

export const getPointTable = async () => {
  return await $axios.get("/points/table");
};
