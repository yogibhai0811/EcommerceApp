import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { getOneProduct } from "../../FetchReq/product";
import { createCartProductAction } from "../../redux/cart/action";
import styles from "./productdetail.module.css";
const ProductDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [elem, setElem] = useState(null);
  const dispatch = useDispatch();
  const handleGetOne = async () => {
    let data = await getOneProduct(id);
    setElem(data.data);
  };
  useEffect(() => {
    setIsLoading(true);
    handleGetOne();
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading === true && elem !== null ? (
        <Loading />
      ) : (
        <div className={styles.card__box}>
          <div className={styles.img_box}>
            <img src={elem?.img[0] ? elem.img[0] : ""} alt="" />
          </div>
          <div className={styles.content_box}>
            <div className={styles.product_title}>
              {elem?.title.substring(0, 30)} for {elem?.gender}
            </div>
            <div className={styles.desc}>
              {elem?.description.substring(0, 60)}
            </div>
            <div className={styles.price}>Rs. {elem?.price}₹</div>
            <div className={styles.rating}>
              Average rating: {elem?.rating} <span>★</span>
            </div>

            <div className={styles.sizeBox}>
              Size:
              {elem?.size.map((btn, i) => (
                <button key={i}>{btn}</button>
              ))}
            </div>
            <div className={styles.cartbtnBox}>
              <button
                onClick={() => {
                  dispatch(createCartProductAction(elem));
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
