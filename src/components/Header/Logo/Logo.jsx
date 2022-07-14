import React from "react";
import { Link } from "react-router-dom";
import style from "./Logo.module.scss";

const Logo = () => {
	return (
		<div className={style.logo}>
			<h2 className={style.site__logo}>
				<Link to="/">
					<span>v</span>enia{" "}
				</Link>
			</h2>
		</div>
	);
};

export default Logo;
