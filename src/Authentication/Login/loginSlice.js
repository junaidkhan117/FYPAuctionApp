import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const loginSlice = createSlice({
  name: "auth/login",
  initialState,
  reducers: {
    setLoginData: (state, action) => {
      return action.payload;
    },
    logout: (state, action) => {
      return initialState;
    },
  },
  extraReducers: {},
});

export const { setLoginData, logout } = loginSlice.actions;

export default loginSlice.reducer;
