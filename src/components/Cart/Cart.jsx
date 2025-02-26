import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import Entry from "../../Entry/Entry";
import ErrorPage from "../../ErrorPage";
import styles from "./Cart.module.css";

function Cart() {
  let total = 0;
  let [cartList, setCartList, addToCart, data, error, loading] =
    useOutletContext();
  let transformedCartList = Object.values(cartList);
  if (loading) return <div>loading...</div>;
  if (error) return <ErrorPage error={error} />;
  if (transformedCartList.length === 0)
    return (
      <div>
        <p>Nothing here yet... go add something to cart!</p>
      </div>
    );
  return (
    <form className={styles.cart}>
      {transformedCartList.map((item) => {
        total += item.price * item.qty;
        return <Entry key={item.id} item={item} />;
      })}

      {
        <div className={styles.total}>
          <p>Total: ${total}</p>
          <button onClick={(e)=>{
            e.preventDefault();
            setCartList({})}}>Checkout</button>
        </div>
      }
    </form>
  );
}

export default Cart;
