import { $axios } from "../axios";

export const getTeamsList = async () => {
  return await $axios.post("/teams");
};
