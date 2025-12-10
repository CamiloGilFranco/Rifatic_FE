import axios from "axios";
import { envVariables } from "../constants/envVariables.js";
import store from "../store/store.js";

export const post = async ({ path, payload, auth = true }) => {
  const globalState = store.getState();
  const tkn = globalState.authSlice._tkn;

  try {
    const { data } = await axios.post(
      `${envVariables.API_URL}${path}`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          ...(auth && { Authorization: `Bearer ${tkn}` }),
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const put = async ({ path, payload, auth = true }) => {
  const globalState = store.getState();
  const tkn = globalState.authSlice._tkn;

  try {
    const { data } = await axios.put(
      `${envVariables.API_URL}${path}`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          ...(auth && { Authorization: `Bearer ${tkn}` }),
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
