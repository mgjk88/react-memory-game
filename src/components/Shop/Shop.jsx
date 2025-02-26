import ErrorPage from "../../ErrorPage";
import Product from "../../Product/Product";
import styles from "./Shop.module.css";
import { useOutletContext } from "react-router-dom";

function Shop() {
  let [cartList, setCartList, addToCart, data, error, loading] = useOutletContext();
  if (loading) return <>loading</>;
  if (error) return <ErrorPage error={error}/>;
  return (
    <form className={styles.cntr}>
      {data &&
        data.map((item) => (
          <Product
            addToCart={addToCart}
            key={item.id}
            id={item.id}
            title={item.title}
            img={item.image}
            price={item.price}
          />
        ))}
    </form>
  );
}

export default Shop;
