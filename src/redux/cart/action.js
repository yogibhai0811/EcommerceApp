import { toast } from "react-toastify";
import { handleAddToCart, handleGetCartProducts } from "../../FetchReq/cart";
import { CART_REQUEST, CART_SUCCESS } from "./actionTypes";

export const getCartProductsAction = () => async (dispatch) => {
  try {
    dispatch({ type: CART_REQUEST });

    const getCart = await handleGetCartProducts();
    console.log("action", getCart);
    dispatch({ type: CART_SUCCESS, payload: { ...getCart } });
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export const createCartProductAction = (data) => async (dispatch) => {
  try {
    dispatch({ type: CART_REQUEST });

    const addCart = await handleAddToCart(data);
    dispatch(getCartProductsAction());
  } catch (error) {
    toast.error("Something went wrong");
  }
};
