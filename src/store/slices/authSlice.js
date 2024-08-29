import { createSlice } from "@reduxjs/toolkit";

const initialState = { _tkn: "", _role: "", _email: "" };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authData: (state, data) => {
      state._tkn = data.payload._tkn;
      state._role = data.payload._role;
      state._email = data.payload._email;
    },
  },
});

export const { authData } = authSlice.actions;

export default authSlice.reducer;
