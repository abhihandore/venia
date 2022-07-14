import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddRemoveQuantity from "../components/AddRemoveQuantity/AddRemoveQuantity";
import { addProdToCart, removeProdFromCart } from "../Store/Slices/cart-slice";

const Cart = () => {
	const { items: cart, totalItemsPrice } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	console.log(cart);
	const quantityChangeHandler = (prodObj, itemCount) => {
		dispatch(addProdToCart({ ...prodObj, quantity: +itemCount }));
	};

	const removeCartItem = (prodId) => {
		dispatch(removeProdFromCart(prodId));
	};
	const cartProducts = cart.map((item, i, arr) => {
		const { thumbnail, title, price, quantity, category, id } = item;
		return (
			<div className="product" key={id}>
				<div className="prod-thmb">
					<img src={thumbnail} alt={thumbnail} />
				</div>
				<div className="prod-details">
					<div className="prod-title">{title}</div>
					<div className="prod-price">{price}</div>
				</div>
				<div className="add-remove-prod">
					<AddRemoveQuantity
						initialQuantity={quantity}
						onQuantityChange={quantityChangeHandler.bind(item)}
					/>
				</div>
				<div className="prod-actions">
					<Link
						to={{
							pathname: `/productdetails/${category}/${id}`,
							state: { initialQuantity: quantity },
						}}
					>
						Edit Prod
					</Link>
					<button
						className="remove-item"
						onClick={removeCartItem.bind(null, id)}
					>
						Remove
					</button>
					<button className="save-prod">Save For Later</button>
				</div>
			</div>
		);
	});

	return (
		<>
			<div className="cart-page">
				<div className="container">
					<h2 style={{ textAlign: "center" }}>Your Shopping Bag</h2>
					<span>{totalItemsPrice}</span>
					{cart.length ? cartProducts : "No Cart Items Found..!"}
					<div className="cart-prod-summary-wrapper">
						<div className="prod-container"></div>
						<div className="price-summary-container"></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
