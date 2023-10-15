import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "../Meals/MealItem/MealItem";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/use-fetch";

const AvailableMeals = () => {
  const [mealsList, setMealsList] = useState(null);
  const requestConfig = {
    url: "http://localhost:8088/meals/all",
    headers: {
      "content-type": "application/json",
    },
  };
  const { error, callApi: bootstrapMeals } = useFetch(
    requestConfig,
    setMealsList
  );

  useEffect(() => {
    bootstrapMeals();
  }, []);

  if (!mealsList) {
    return;
  }
  console.log(mealsList);
  const meals = mealsList.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
