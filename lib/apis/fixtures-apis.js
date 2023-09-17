import { $axios } from "../axios";

export const getFixtureList = async () => {
  return await $axios.post("/fixtures");
};

export const createMatches = async (values) => {
  return await $axios.post("/fixture/create", values);
};

export const getUpcomingMatchesList = async () => {
  return await $axios.post("/fixtures/upcoming");
};
