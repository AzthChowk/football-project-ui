import { $axios } from "../axios";

export const getPlayersList = async () => {
  return await $axios.post("/players");
};
