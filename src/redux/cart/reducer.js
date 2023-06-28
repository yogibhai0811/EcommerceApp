import { CART_FAIL, CART_REQUEST, CART_SUCCESS } from "./actionTypes";

const init = {
  cart: [],
  isCartLoading: false,
  isCartError: false,
  total: 0,
};

export const cartReducer = (state = init, { type, payload }) => {
  switch (type) {
    case CART_REQUEST:
      return {
        ...state,
        isCartLoading: true,
      };
    case CART_SUCCESS:
      return {
        ...state,
        isCartLoading: false,
        cart: [...payload.data],
        total: payload.total,
      };
    case CART_FAIL:
      return {
        ...state,
        isCartError: true,
      };
    default:
      return state;
  }
};
