import { Fragment } from "react";
import Header from "../Layout/Header";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import Cart from "../Cart/Cart";
import { useState } from "react";

export default function Meals(props) {
  const [meatsModal, setMeatsModal] = useState(false);
  const showMeatsModal = () => {
    setMeatsModal(true);
  };

  const hideMeatsModalHandle = () => {
    setMeatsModal(false);
  };

  return (
    <Fragment>
      {meatsModal && <Cart hideMeatsModal={hideMeatsModalHandle} />}
      <Header showMealsHandle={showMeatsModal} />
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
}
