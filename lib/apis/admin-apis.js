import { $axios } from "../axios";

export const addAdmin = async (values) => {
  return await $axios.post("/admin/create", values);
};
