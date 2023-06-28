import { PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionTypes";

const init = {
  products: [],
  isLoading: false,
  isError: false,
};

export const getProductReducer = (state = init, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    default:
      return state;
  }
};
