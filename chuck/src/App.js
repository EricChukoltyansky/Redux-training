import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

// store - stores data, think of state
// reducer - function that usec to update state
import { DECREASE, INCREASE, RESET } from "./actions";

import reducer from "./reducer";

import { createStore } from "redux";
// initial store
const initialStore = {
  count: 0,
};

const store = createStore(reducer, initialStore);
store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "RESET" });
console.log("get store", store.getState());

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
