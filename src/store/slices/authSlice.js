import { createSlice } from "@reduxjs/toolkit";

const initialState = { _tkn: "", _role: "", _email: "", _pth: "" };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authData: (state, data) => {
      if (data.payload?._tkn) {
        state._tkn = data.payload._tkn;
      }
      if (data.payload?._role) {
        state._role = data.payload._role;
      }
    },
  },
});

export const { authData } = authSlice.actions;

export default authSlice.reducer;
