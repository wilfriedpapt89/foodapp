import Modal from "../Modal/Modal";
import classes from "./Cart.module.css";

const meals = [{ id: 5, name: "Pop Corn", price: 5000 }];

const Cart = (props) => {
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {meals.map((meal) => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItem}
      <div className={classes.total}>
        <span>Total</span>
        <span>$1000</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.hideMeatsModal}
        >
          Cancel
        </button>
        <button onClick={props.hideMeatsModal}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
