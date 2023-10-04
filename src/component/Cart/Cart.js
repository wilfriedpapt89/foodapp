import { useContext } from "react";
import Modal from "../Modal/Modal";
import classes from "./Cart.module.css";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartMealsCtx = useContext(CartContext);
  const totalAmount = cartMealsCtx.totalAmount.toFixed(2);
  const cartRemoveHandler = (id) => {
    cartMealsCtx.removeItem(id);
  };

  const cartAddHandler = (item) => {
    cartMealsCtx.addItem({ ...item, amount: 1 });
  };

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartMealsCtx.items.map((cartMeal) => (
        <CartItem
          key={cartMeal.id}
          name={cartMeal.name}
          price={cartMeal.price}
          amount={cartMeal.amount}
          onRemove={cartRemoveHandler.bind(null, cartMeal.id)}
          onAdd={cartAddHandler.bind(null, cartMeal)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onclose={props.hideMeatsModal}>
      {cartItem}
      <div className={classes.total}>
        <span>Total</span>
        <span>{"$" + totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.hideMeatsModal}>Cancel</button>
        <button
          className={classes["button--alt"]}
          onClick={props.hideMeatsModal}
        >
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
