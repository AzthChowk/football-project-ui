import { $axios } from "../axios";

export const getTeamsList = async () => {
  return await $axios.post("/teams");
};
export const addTeam = async (values) => {
  return await $axios.post("/team/create", values);
};
