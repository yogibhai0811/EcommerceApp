import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "../pages/Cart/Cart";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import OrderPage from "../pages/OrderPage/OrderPage";

const Routing = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/cart"} element={<Cart />}></Route>
        <Route path={"/product/:id"} element={<ProductDetail />}></Route>
        <Route path={"/order"} element={<OrderPage />}></Route>
      </Routes>
    </>
  );
};

export default Routing;
