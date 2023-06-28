import { toast } from "react-toastify";
import { takeUserData } from "../redux/auth/action";
import { getCartProductsAction } from "../redux/cart/action";
import { getCookie, setCookie } from "../utils/cookies";
import { baseURL } from "./baseURL";

export const handleAuthLogin = async (payload, dispatch) => {
  await fetch(`${baseURL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        toast("Logged in successfully");
        setCookie("token", res.data.token);
        setCookie("username", res.data.username);
        setCookie("userId", res.data._id);
        dispatch(
          takeUserData({
            token: getCookie("token"),
            userId: getCookie("userId"),
            username: getCookie("username"),
          })
        );
        dispatch(getCartProductsAction());
      } else {
        toast.error(res.message);
      }
    })
    .catch((error) => {
      console.log(error.message);
      toast.error("Something went wrong");
    });
};

export const handleAuthRegister = async (payload) => {
  await fetch(`${baseURL}/auth/register`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        toast.success("Registered successfully");
      } else {
        toast.error(res.message);
      }
    })
    .catch((error) => {
      console.log(error.message);
      toast.error("Something went wrong");
    });
};
