import React from "react";
import styles from "./card.module.css";
import { useDispatch } from "react-redux";
import { createCartProductAction } from "../../redux/cart/action";
import { Link } from "react-router-dom";
const Card = ({ elem }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.card__box}>
      <Link
        to={`/product/${elem._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className={styles.img_box}>
          <img src={elem.img[0]} alt="" />
        </div>
        <br />
        <div className={styles.product_title}>
          {elem.title.substring(0, 30)}
        </div>
        <div className={styles.price}>Rs. {elem.price}₹</div>
      </Link>
      <br />
      <div className={styles.btn_box}>
        <button
          onClick={() => {
            dispatch(createCartProductAction(elem));
          }}
        >
          Add to Cart
        </button>
        <div className={styles.rating}>
          {elem.rating} <span>★</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
