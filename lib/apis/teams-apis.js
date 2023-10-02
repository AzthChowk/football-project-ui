import { $axios } from "../axios";

export const getTeamsList = async () => {
  return await $axios.post("/teams");
};
export const addTeam = async (values) => {
  return await $axios.post("/team/create", values);
};

export const deleteTeam = async (teamId) => {
  return await $axios.delete(`/team/delete/${teamId}`);
};

export const getTeamDetails = async (id) => {
  return await $axios.post(`/team/${id}`, id);
};
export const getTeamSquad = async (id) => {
  return await $axios.post(`/team/${id}/players`, id);
};
