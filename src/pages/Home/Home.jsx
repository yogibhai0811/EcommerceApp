import React from "react";
import { useEffect } from "react";
import { getProductsAction } from "../../redux/product/action";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import styles from "./home.module.css";
import Card from "../../components/Card/Card";
import { getCookie } from "../../utils/cookies";
import { getCartProductsAction } from "../../redux/cart/action";
const Home = () => {
  const { products, isLoading } = useSelector((state) => state.productState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAction());
    if (getCookie("token")) {
      dispatch(getCartProductsAction());
    }
  }, [dispatch]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.home__container}>
          {products.map((elem) => (
            <div key={elem._id}>
              <Card elem={elem} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
