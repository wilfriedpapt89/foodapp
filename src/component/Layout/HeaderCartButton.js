import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../Context/cart-context";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  return (
    <button className={classes.button} onClick={props.showMeals}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>{props.title}</span>
      <span className={classes.badge}>{ctx.meals.length}</span>
    </button>
  );
};

export default HeaderCartButton;
