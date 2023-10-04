import { Fragment, useState, useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const handleAddMeal = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const entrerdAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      entrerdAmountNumber < 1 ||
      entrerdAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(entrerdAmountNumber);
  };

  return (
    <Fragment>
      <form className={classes.form} onSubmit={handleAddMeal}>
        <Input
          ref={amountInputRef}
          label={props.price}
          input={{
            id: props.id,
            type: "number",
            min: "1",
            max: "5",
            defaultValue: "1",
          }}
        />
        <div>
          <button>+ Add</button>
          {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </div>
      </form>
    </Fragment>
  );
};

export default MealItemForm;
