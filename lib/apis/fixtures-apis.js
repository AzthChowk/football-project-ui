import { $axios } from "../axios";

export const getFixtureList = async () => {
  return await $axios.post("/fixtures");
};

export const getMatchDetail = async (matchId) => {
  return await $axios.get(`/fixtures/${matchId}`);
};

export const createMatches = async (values) => {
  return await $axios.post("/fixture/create", values);
};

export const getUpcomingMatchesList = async () => {
  return await $axios.post("/fixtures/upcoming");
};
