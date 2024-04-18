import { fetchWrapper } from "./restApi";
const API_URL_GET = process.env.REACT_APP_API_URL;


export const getDashboardStats = () => {
  return fetchWrapper("GET", `${API_URL_GET}/products`);
};