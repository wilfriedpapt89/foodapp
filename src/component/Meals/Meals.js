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

  const hideMeatsModal = () => {
    setMeatsModal(false);
  };

  return (
    <Fragment>
      {meatsModal && (
        <Cart showModal={showMeatsModal} hideModal={hideMeatsModal} />
      )}
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
}
