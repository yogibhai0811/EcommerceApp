import { handleGetAllProducts } from "../../FetchReq/product";
import { PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionTypes";

export const getProductsAction = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQUEST });
    let productsData = await handleGetAllProducts();
    let data = productsData.data;
    console.log("action", data);
    dispatch({ type: PRODUCT_SUCCESS, payload: data });
  } catch (error) {}
};
