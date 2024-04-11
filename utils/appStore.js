import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// Configuring our store
const appStore = configureStore({
  // store reducer- combination of slice reducers
  reducer: {
    // add reducer of all the slices
    cart: cartReducer,
    // user: userReducer
  },
});

export default appStore;
