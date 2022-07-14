import React from "react";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import style from "./Header.module.scss";

const Header = () => {
	return (
		<header>
			<div className={`${style.header_wrap} container`}>
				<Logo />
				<Nav />
			</div>
		</header>
	);
};

export default Header;
