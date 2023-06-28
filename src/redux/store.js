import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/reducer";
import { cartReducer } from "./cart/reducer";
import { getProductReducer } from "./product/reducer";

const rootReducer = combineReducers({
  productState: getProductReducer,
  cartState: cartReducer,
  authState: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
