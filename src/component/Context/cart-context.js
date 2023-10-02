import React, { useState } from "react";

const CartContext = React.createContext({
  meals: [],
  addMeals: (mealId) => {},
});

export const CartContextProvider = (props) => {
  const [allMeals, setAllMeals] = useState([]);
  let contains = false;
  const handleAddingMeals = (newMeal) => {
    console.log("Method execution");
    for (let i = 0; i < allMeals.length; i++) {
      if (allMeals[i] === newMeal) {
        contains = true;
        break;
      }
    }
    if (!contains) setAllMeals((prevAllMeals) => [...prevAllMeals, newMeal]);
    console.log(allMeals);
  };

  return (
    <CartContext.Provider
      value={{
        meals: allMeals,
        addMeals: handleAddingMeals,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
