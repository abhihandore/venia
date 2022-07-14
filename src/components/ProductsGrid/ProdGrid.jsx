import React from "react";
// import style from "./ProdGrid.module.scss";
import { NavLink } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./ProdGrid.scss";

const ProdGrid = ({ prodList }) => {
	console.log(prodList);
	return (
		<>
			<div className="product-grid row grid-view">
				{prodList.map((prod, i, arr) => {
					return (
						<NavLink
							key={i}
							to={`/productdetails/${prod.category}/${prod.id}`}
							className="product-item"
						>
							<div className="product-image">
								<figure className="product-image-wrap">
									<img src={prod.thumbnail} alt={prod.title} />
								</figure>
							</div>
							<div className="product-name">
								<strong>{prod.title}</strong>
							</div>
							<div className="product-price">
								<span>{prod.price}</span>
							</div>
							<div className="product-save">
								<FavoriteBorderIcon />
							</div>
						</NavLink>
					);
				})}
			</div>
		</>
	);
};

export default ProdGrid;
