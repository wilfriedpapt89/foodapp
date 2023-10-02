import { useContext } from "react";
import Modal from "../Modal/Modal";
import classes from "./Cart.module.css";
import CartContext from "../Context/cart-context";

const meals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const Cart = (props) => {
  const cartMealsCtx = useContext(CartContext);

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartMealsCtx.meals.map((cartMeal) => {
        let oneMeal = "";
        for (let i = 0; i < meals.length; i++) {
          if (cartMeal === meals[i].id) {
            console.log(cartMeal + " === " + meals[i].id);
            oneMeal = <li key={meals[i].id}>{meals[i].name}</li>;
          }
        }
        return oneMeal;
      })}
    </ul>
  );
  // console.log("render the modal");
  return (
    <Modal onclose={props.hideMeatsModal}>
      {cartItem}
      <div className={classes.total}>
        <span>Total</span>
        <span>$1000</span>
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
