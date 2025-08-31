import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import themeSlice from "./slices/themeSlice";

export default configureStore({ reducer: { authSlice, themeSlice } });
