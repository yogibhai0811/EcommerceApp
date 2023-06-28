import { baseURL } from "./baseURL.js";
import { getCookie } from "../utils/cookies";
import { toast } from "react-toastify";
export const getOrderLists = async () => {
  try {
    let res = await fetch(
      `${baseURL}/order/getorder/631a3db57ccd2b6907e8ef0f`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    let data = await res.json();
    if (data.success === true) {
      return data;
    } else {
      toast.error("No items are ordered");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export const buyNowOrder = async () => {
  try {
    let res = await fetch(`${baseURL}/order/order/${getCookie("userId")}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    if (data.success === true) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};
