import { $axios } from "../axios";

// export const getFixtureList = async () => {
//   return await $axios.post("/fixtures");
// };

export const createGroup = async (values) => {
  return await $axios.post("/group/create", values);
};
