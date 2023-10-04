import CartContext from "./cart-context";
import { useState } from "react";

export const CartContextProvider = (props) => {
const [allMeals, setAllMeals] = useState([]);

const addItemHandler = item => {};
const removeItemHandler = id => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  
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
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
