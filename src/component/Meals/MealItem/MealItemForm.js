import { Fragment } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <Fragment>
      <form className={classes.form}>
        <Input
          label={"Amount" + props.id}
          input={{
            id: "amount",
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
