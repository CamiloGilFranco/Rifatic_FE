import { createSlice } from "@reduxjs/toolkit";
import { lightTheme, darkTheme } from "../../styles/themes";

const initialState = lightTheme;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, data) => {
      return { ...state, ...data.payload };
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
