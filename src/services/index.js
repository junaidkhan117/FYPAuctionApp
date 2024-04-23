import { fetchWrapper } from "./restApi";
const API_URL_GET = process.env.REACT_APP_API_URL;


export const login = (Data) => {
  return fetchWrapper("POST", `${API_URL_GET}/auth/login`, Data);
};

export const signUp = (Data) => {
  console.log(Data)
  return fetchWrapper("POST", `${API_URL_GET}/auth/register`, Data);
};


export const getDashboardProducts = (page) => {
  console.log(page)
  return fetchWrapper("GET", `${API_URL_GET}/products/?p=${page}&page_size=4`);
};

export const getAuctions = (page) => {
  console.log(page)
  return fetchWrapper("GET", `${API_URL_GET}/auction/?p=${page}&page_size=4`);
};