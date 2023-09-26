import { Fragment } from "react";
import Header from "../Layout/Header";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

export default function Meals(props) {
  return (
    <Fragment>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
}
