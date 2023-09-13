import { $axios } from "../axios";

export const getFixtureList = async () => {
  return await $axios.post("/fixtures");
};
export const getUpcomingMatchesList = async () => {
  return await $axios.post("/fixtures/upcoming");
};
