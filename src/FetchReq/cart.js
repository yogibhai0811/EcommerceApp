import { toast } from "react-toastify";
import { getCookie } from "../utils/cookies";
import { baseURL } from "./baseURL";

export const handleAddToCart = async (payload) => {
  try {
    payload.userId = getCookie("userId");
    payload.productId = payload._id;
    delete payload._id;
    await fetch(`${baseURL}/cart/createcart`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          toast.success(res.message);
        } else {
          toast.error("Please Login to add products in Cart");
        }
      });
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export const handleGetCartProducts = async () => {
  try {
    let res = await fetch(`${baseURL}/cart/getcart/${getCookie("userId")}`, {
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    if (data.success) {
      return data;
    } else {
      toast.error("Please Login to have cart data");
      return [];
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export const deleteCart = async (id) => {
  try {
    await fetch(`${baseURL}/cart/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          toast.success(res.message);
        } else {
          toast.error("Some error occured");
        }
      });
  } catch (error) {
    toast.error("Something went wrong");
  }
};
