import { Outlet, Link } from "react-router-dom";
import useAPI from "../../useAPI";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [data, error, loading] = useAPI("https://fakestoreapi.com/products");
  let [cartList, setCartList] = useState({});
  const numCartItems = Object.keys(cartList).length;

  const addToCart = (id, title, img, price, qty) => {
    if(cartList[id]) {
      cartList[id].qty += qty
      setCartList({...cartList});
      return;
    }
    setCartList({...cartList, [id]: {title, img, price, qty, id},});
  }

  if(loading) return <p>Loading</p>
  return (
    <>
<nav className={styles.nav}>
        <Link className={styles.linkBtn} to='/'>
          <p>Home</p>
        </Link>
        <Link className={styles.linkBtn} to="shop">
          <p>Shop</p>
        </Link>
        <Link className={styles.linkBtn} to="cart">
          <p>Cart</p>
        </Link>
        {numCartItems > 0 && (
          <div className={styles.noCartItems}>
            <p>{numCartItems}</p>
          </div>
        )}
      </nav>
      <main>
        <Outlet context={{cartList, setCartList, addToCart, data, error, loading}} />
      </main>
    </>
      
  );
}

export default App;
