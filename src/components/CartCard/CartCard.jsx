import React from "react";
import styles from "./cartcard.module.css";
import { AiFillDelete } from "react-icons/ai";
import { deleteCart } from "../../FetchReq/cart";
import { getCartProductsAction } from "../../redux/cart/action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const CartCard = ({ elem }) => {
  const dispatch = useDispatch();
  const handleDlt = async (id) => {
    await deleteCart(id);
    dispatch(getCartProductsAction());
  };
  return (
    <div className={styles.card__box}>
      <Link
        to={`/product/${elem.productId}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className={styles.img_box}>
          <img src={elem.img[0]} alt="" />
        </div>
      </Link>
      <div className={styles.content_box}>
        <div className={styles.product_title}>
          {elem.title.substring(0, 30)} for {elem.gender}
        </div>
        <div className={styles.desc}>{elem.description.substring(0, 60)}</div>
        <div className={styles.price}>Rs. {elem.price}₹</div>
        <div className={styles.rating}>
          Average rating: {elem.rating} <span>★</span>
        </div>

        <div className={styles.sizeBox}>
          Size:
          {elem.size.map((btn) => (
            <button>{btn}</button>
          ))}
        </div>
        <br />
        <br />
        <div className={styles.delete_btn_box}>
          <button onClick={() => handleDlt(elem._id)}>
            <AiFillDelete className={styles.dlt_icon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
