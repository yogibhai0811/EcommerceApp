import { USER } from "./actionTypes.";

export const takeUserData = (payload) => {
  return {
    type: USER,
    payload,
  };
};
