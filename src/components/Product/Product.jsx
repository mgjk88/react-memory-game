import propTypes from "prop-types";
import styles from "./Product.module.css";
import { useState } from "react";

function Product({ id, title, img, price, addToCart }) {
  let [qty, setQty] = useState(0);
  return (
    <div className={styles.card}>
      <p>{title}</p>
      <img className={styles.pic} src={img} alt={title} />
      <p>${price}</p>
      <div className={styles.setQtyCntr}>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (qty > 0) setQty(qty - 1);
          }}
        >
          -
        </button>
        <input
          type="number"
          name='quantity'
          onChange={(e) => {
            e.preventDefault();
            setQty(e.target.value);
          }}
          value={qty}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setQty(qty + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          if(qty === 0) return;
          addToCart(id, title, img, price, qty);
          setQty(0);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

Product.propTypes = {
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
  addToCart: propTypes.func.isRequired,
};

export default Product;
