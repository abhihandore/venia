import { createSlice, current } from "@reduxjs/toolkit";

/*A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state. */
const CartSlice = createSlice({
	name: "cart",
	initialState: {
		totalQuantity: 0,
		items: [],
		savedItems: [],
		totalItemsPrice: 0,
	},
	reducers: {
		addProdToCart: (state, action) => {
			const product = action.payload;
			const { items: cartItems } = state;
			const exstIndex = cartItems.findIndex((item) => item.id === product.id);

			state.totalQuantity += +product.quantity;
			state.totalItemsPrice += product.price * product.quantity;

			if (exstIndex !== -1) {
				// if item exist in cart,
				const exstItem = cartItems[exstIndex];
				const updatedItem = {
					...exstItem,
					quantity: exstItem.quantity + product.quantity,
				};
				state.items.splice(exstIndex, 1, updatedItem);
			} else {
				state.items.push(product);
			}
		},
		removeProdFromCart: (state, action) => {
			const removeProdId = action.payload;
			const { items: cartItems } = state;

			const removeProdIndex = cartItems.findIndex(
				(item) => item.id === removeProdId
			);
			const removeProdItem = cartItems[removeProdIndex];

			state.totalQuantity -= removeProdItem.quantity;
			state.totalItemsPrice -= removeProdItem.price * removeProdItem.quantity;
			state.items.splice(removeProdIndex, 1);
		},
		saveItem: (state, action) => {
			const product = action.payload;
			const { savedItems } = state;

			const exstIndex = savedItems.findIndex((item) => item.id === product.id);

			if (exstIndex !== -1) {
				console.log("Already Added to saved.");
			} else {
				state.savedItems.push(product);
			}

			console.log(current(state));
		},
		removeProdFromSaved: (state, action) => {},
	},
});

// Custom action creator [Thunk] || Action creators for the types of actions that are handled by the slice reducer.
export const { addProdToCart, removeProdFromCart, saveItem } =
	CartSlice.actions;
export default CartSlice;
