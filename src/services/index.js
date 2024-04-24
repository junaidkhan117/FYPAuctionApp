import { fetchWrapper } from "./restApi";
const API_URL_GET = process.env.REACT_APP_API_URL;

export const login = (Data) => {
  return fetchWrapper("POST", `${API_URL_GET}/auth/login`, Data);
};

export const signUp = (Data) => {
  console.log(Data);
  return fetchWrapper("POST", `${API_URL_GET}/auth/register`, Data);
};
export const getAuctions = (Data) => {
  // https://ua80926.pythonanywhere.com/v1/api/auction/
  console.log(Data);
  return fetchWrapper("POST", `${API_URL_GET}/auction`, Data);
};

export const getDashboardProducts = (page) => {
  console.log(page);
  return fetchWrapper("GET", `${API_URL_GET}/products/?p=${page}&page_size=4`);
};

export const createAuction = (Data) => {
  console.log(Data);
  return fetchWrapper("POST", `${API_URL_GET}/auction/create`, Data);
};

/**
 * Fetches product prices from the API.
 * @param {string} productName - The name of the product to fetch prices for.
 * @returns {Promise<Object>} - Promise containing the fetched data.
 */
export const getPrice = (productName) => {
  console.log(productName);
  return fetchWrapper(
    "GET",
    `https://ua80926.pythonanywhere.com/v1/api/search-product/?q=${productName}`
  );
};

// =coffee/
