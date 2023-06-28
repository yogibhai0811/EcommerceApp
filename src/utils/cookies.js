import Cookies from "js-cookie";

export const setCookie = (key, value) => {
  Cookies.set(key, value);
};

export const getCookie = (key) => {
  let get = Cookies.get(key);
  return get;
};
