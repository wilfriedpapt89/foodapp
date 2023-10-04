import CartContext from "./cart-context";
import { useReducer } from "react";

const cartReducerInitialstate = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.value.id
    );

    const existingItem = state.items[existingItemIndex];
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.value.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else updatedItems = state.items.concat(action.value);
    return {
      items: updatedItems,
      totalAmount: state.totalAmount + action.value.price * action.value.amount,
    };
  } else if (action.type === "REMOVE") {
    let updatedItems;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.value
    );
    const existingItem = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    const existingAmount = existingItem.amount;

    if (existingAmount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.value);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingAmount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return cartReducerInitialstate;
};

export const CartContextProvider = (props) => {
  const [cartState, dispatcherCartAction] = useReducer(
    cartReducer,
    cartReducerInitialstate
  );

  const addItemHandler = (item) => {
    dispatcherCartAction({ type: "ADD", value: item });
  };
  const removeItemHandler = (id) => {
    dispatcherCartAction({ type: "REMOVE", value: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
