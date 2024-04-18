import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import loginSlice from "../Authentication/Login/loginSlice";
const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    ...asyncReducers,
    userSlice,
    loginSlice,
  });

  /*
	Reset the redux store when user logged out
	 */
  if (action.type === "auth/user/userLoggedOut") {
    state = undefined;
  }

  return combinedReducer(state, action);
};

export default createReducer;
