import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../../Api/Api";
import useHttp from "../../../Hooks/useHttp";
import Overlay from "../../UI/Overlay/Overlay";

// import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
// import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import "./Nav.scss";
import { useSelector } from "react-redux";
import Login from "../../Login/Login";

const Nav = () => {
	const [openModal, setOpenModal] = useState(false);
	const cart = useSelector((state) => state.cart);

	const {
		sendRequest: dispatchForCategoryRequest,
		data: categories,
		// error,
		// isLoading,
	} = useHttp(getAllCategories);

	useEffect(() => {
		dispatchForCategoryRequest();
	}, [dispatchForCategoryRequest]);

	const categoriesJSX = Array.from(categories).map((item, i, arr) => {
		return (
			<li className="nav__item" key={i}>
				<Link to={`/category/${item.replace(/ /g, "-")}`} className="nav__link">
					{item}
				</Link>
			</li>
		);
	});

	return (
		<>
			{openModal && (
				<Overlay
					content={<Login />}
					onOverlayClick={() => setOpenModal(false)}
				/>
			)}
			<nav className="navigations">
				<ul className="nav__list">{categoriesJSX}</ul>
			</nav>
			<nav className="navigations right__nav">
				<ul className="nav__list">
					<li className="nav__item">
						<Link to="/" className="nav__link">
							{/* <SearchRoundedIcon /> */}
							<span>Search</span>
						</Link>
					</li>
					<li className="nav__item">
						<span className="nav__link" onClick={() => setOpenModal(true)}>
							Sign in
						</span>
					</li>
					<li className="nav__item">
						<Link to="/cart" className="nav__link">
							<span className="add-cart">
								<span className="cart-btn-label">Cart</span>
								<LocalMallOutlinedIcon className="mui-cart-icon" />
								<span className="cart-counter">{cart.totalQuantity}</span>
							</span>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Nav;
