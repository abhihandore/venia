import React, { useEffect } from "react";
import { useParams } from "react-router";
import useHttp from "../Hooks/useHttp";
import { getSingleProduct } from "../Api/Api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import PDPSlider from "../components/PDPSlider/PDPSlider";
import AddRemoveQuantity from "../components/AddRemoveQuantity/AddRemoveQuantity";
import Ratings from "../components/Rating/Rating";
import { addProdToCart, saveItem } from "../Store/Slices/cart-slice";
import { useDispatch } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./ProductDetail.scss";

const ProductDetail = () => {
	const { prodId, prodCategory } = useParams();
	const a = useParams();
	console.log(a);

	const dispatch = useDispatch();

	const {
		sendRequest: dispatchReqForProdDetails,
		data: prodObj,
		isLoading,
		// error,
	} = useHttp(getSingleProduct);

	const { brand, category, images, title, price, rating, description } =
		prodObj;

	useEffect(() => {
		dispatchReqForProdDetails({ prodId, prodCategory });
	}, [dispatchReqForProdDetails, prodId, prodCategory]);

	const addToCartClickHandler = (itemCount) => {
		dispatch(addProdToCart({ ...prodObj, quantity: +itemCount }));
	};

	const saveItemHandler = (e) => {
		dispatch(saveItem(prodObj));
	};
	return (
		<>
			{isLoading === false ? (
				<div className="prod-detail-wrap prod-detail-page">
					<div className="container">
						<div className="product-top-wrap">
							<section className="product-image-gallary">
								<PDPSlider prodImages={images} />
							</section>
							<section className="product-micro-details">
								<div className="breadcrumb">{`${
									category.charAt(0).toUpperCase() +
									category.slice(1).toLowerCase()
								} / ${
									brand.charAt(0).toUpperCase() + brand.slice(1).toLowerCase()
								} `}</div>
								<h2 className="product-name">{title}</h2>
								<div className="product-price">${price}</div>
								<Ratings rating={rating} />
								<div className="product-descrition">{description}</div>
								<AddRemoveQuantity
									onAddToCartClick={addToCartClickHandler}
									initialQuantity={1}
								/>
								<div className="other-actions">
									<button className="save-for-later" onClick={saveItemHandler}>
										<FavoriteBorderIcon />
										<span>Save</span>
									</button>
								</div>
							</section>
						</div>
						<div className="product-bottom-wrap"></div>
					</div>
				</div>
			) : (
				<LoadingSpinner position={"center"} />
			)}
		</>
	);
};

export default ProductDetail;
