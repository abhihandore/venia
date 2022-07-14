import React, { useEffect, useRef, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const AddRemoveQuantity = ({
	onAddToCartClick = null,
	onQuantityChange = null,
	initialQuantity,
}) => {
	const [quantity, setQuantity] = useState(initialQuantity);
	const quantityInput = useRef();

	function calculateQuantity(sign = 1) {
		if (quantity <= 1 && +sign === 0) return;

		setQuantity((prevQuantity) => {
			return sign ? prevQuantity + 1 : prevQuantity - 1;
		});
	}

	const cartFormSubmitHandler = (e) => {
		e.preventDefault();

		onAddToCartClick && onAddToCartClick(quantityInput.current.value);
	};

	return (
		<form
			action="#"
			className="add-to-cart-form"
			onSubmit={cartFormSubmitHandler}
		>
			<fieldset className="fieldset">
				<div className="field">
					<label className="qty-clc-label" htmlFor="qty-clc-input">
						Quantity
					</label>
					<div className="control">
						<input
							ref={quantityInput}
							type="text"
							className="qty-clc-input"
							name="qty-clc-input"
							id="qty-clc-input"
							min="1"
							value={quantity}
							onChange={(e) => {
								setQuantity(+e.target.value);
							}}
						/>
						<div className="qty-changer">
							<button
								type="button"
								className="incr-qty"
								onClick={calculateQuantity.bind(null, 1)}
							>
								<AddIcon />
							</button>
							<button
								type="button"
								className="decr-qty"
								onClick={calculateQuantity.bind(null, 0)}
							>
								<RemoveIcon />
							</button>
						</div>
					</div>
				</div>
				<div className="field actions">
					<div className="control">
						<button type="submit" className="add-to-cart-submit">
							Add to Cart
						</button>
					</div>
				</div>
			</fieldset>
		</form>
	);
};

export default AddRemoveQuantity;
