import { $axios } from "../axios";

export const getUsersList = async () => {
  return await $axios.get("/users");
};

export const getReporterDetails = async (id) => {
  return await $axios.get(`/user/reporter/${id}`);
};

export const updatePassword = async (values) => {
  return await $axios.put("/user/changepassword", values);
};
