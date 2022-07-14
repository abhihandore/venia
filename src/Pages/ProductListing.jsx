import React, { useEffect } from "react";
import { useParams } from "react-router";
import { getProductFromCategory } from "../Api/Api";
import useHttp from "../Hooks/useHttp";
import Banner from "../components/Banner/Banner";
import ProdGrid from "../components/ProductsGrid/ProdGrid";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const ProductListing = () => {
	const { id: categoryName } = useParams();

	const {
		sendRequest: dispatchCategoryProdRequest,
		data: productsGrid,
		isLoading,
		// error,
	} = useHttp(getProductFromCategory);

	useEffect(() => {
		dispatchCategoryProdRequest(categoryName);
	}, [dispatchCategoryProdRequest, categoryName]);

	return (
		<>
			<Banner />
			{isLoading === false ? (
				<div className="main-section container">
					<ProdGrid prodList={productsGrid} />
				</div>
			) : (
				<LoadingSpinner position={"center"} />
			)}
		</>
	);
};

export default ProductListing;
