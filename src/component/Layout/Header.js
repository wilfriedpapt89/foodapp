import meals from "../../assets/images/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const { Fragment } = require("react");

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meal</h1>
        <HeaderCartButton title="My cart" showMeals={props.showMealsHandle} />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="Meal" />
      </div>
    </Fragment>
  );
};

export default Header;
