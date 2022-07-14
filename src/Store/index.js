import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/cart-slice";

const store = configureStore({
	reducer: {
		cart: CartSlice.reducer,
	},
});

export default store;
