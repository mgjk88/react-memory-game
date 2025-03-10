import propTypes from "prop-types";
import styles from "./Entry.module.css";
import { useOutletContext } from "react-router-dom";

function Entry({item}) {
    let {cartList, setCartList} = useOutletContext();
  return (
    <div className={styles.entry}>
      <img className={styles.pic} src={item.img} alt={item.title} />
      <div>
        <p>{item.title}</p>
        <input
          type="number"
          onInput={(e) => {
                let newCartList = {...cartList}
                newCartList[item.id].qty = e.target.value;
                setCartList(newCartList);
          }}
          value={item.qty}
        />
        <p>$ {item.price}</p>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          let newCartList = {...cartList}
          delete newCartList[item.id];
          setCartList(newCartList);
        }}
      >
        Delete
      </button>
    </div>
  );
}

Entry.propTypes = {
    item: propTypes.object
}

export default Entry;
