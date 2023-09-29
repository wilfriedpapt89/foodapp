import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.showMeals}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>{props.title}</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
