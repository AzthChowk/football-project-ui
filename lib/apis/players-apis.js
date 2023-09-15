import { $axios } from "../axios";

export const getPlayersList = async () => {
  return await $axios.post("/players");
};
export const getPlayerDetails = async (playerId) => {
  return await $axios.post(`/player/details/${playerId}`);
};

export const addPlayer = async (values) => {
  return await $axios.post("player/create", values);
};
