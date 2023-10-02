import { Fragment } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useContext } from "react";
import CartContext from "../../Context/cart-context";

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  const handleAddMeal = (e) => {
    e.preventDefault();
    cartCtx.addMeals(props.meal.id);
  };

  return (
    <Fragment>
      <form className={classes.form} onSubmit={handleAddMeal}>
        <Input
          label={props.meal.price}
          input={{
            id: props.meal.id,
            type: "number",
            min: "1",
            max: "5",
            defaultValue: "1",
          }}
        />
        <div>
          <button>+ Add</button>
        </div>
      </form>
    </Fragment>
  );
};

export default MealItemForm;
