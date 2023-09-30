import React, { useState } from "react";

const CartContext = () => {
  React.createContext({
    meals: [],
    addMeals: (meal) => {},
  });
};

export const CartContextProvider = () => {
  const [allMeals, setAllMeals] = useState([]);

  const handleAddingMeals = (newMeal) => {
    setAllMeals((prevAllMeals) => [...prevAllMeals, newMeal]);
  };

  return (
    <CartContext.Provider
      value={{
        meals: allMeals,
        addMeals: handleAddingMeals,
      }}
    ></CartContext.Provider>
  );
};

export default CartContext;
