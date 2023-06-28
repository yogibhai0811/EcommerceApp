import { USER } from "./actionTypes.";

const init = {
  token: null,
  username: null,
  userId: null,
};
export const authReducer = (state = init, { type, payload }) => {
  switch (type) {
    case USER:
      return {
        ...state,
        token: payload.token,
        username: payload.username,
        userId: payload.userId,
      };
    default:
      return state;
  }
};
