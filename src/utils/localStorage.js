/**
 * @function getFromLocalStorage
 * @param {string} key - The key to lookup
 * @description
 *   Get stuff from local storage
 * @return {*} The response from local storage
 * */
export const getFromLocalStorage = (key) => {
  if (!window.localStorage) return null;

  return window.localStorage.getItem(key) || null;
};

/**
 * @function setToLocalStorage
 * @param {string} key - The key to use during storage
 * @param {*} val - The value to store
 * @description
 *   Set stuff to local storage
 * */
export const setToLocalStorage = (key, val) => {
  if (!window.localStorage) return;

  window.localStorage.setItem(key, val);
};

/**
 * @function deleteFromLocalStorage
 * @param {string} key - The key to use during storage
 * @description
 *   Delete Stored From Stuff local storage
 * */
export const deleteFromLocalStorage = (key) => {
  if (!window.localStorage) return;

  window.localStorage.removeItem(key);
};
