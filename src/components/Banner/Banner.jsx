import React from "react";
import { useParams } from "react-router";
import style from "./Banner.module.scss";

const Banner = () => {
	const { id: categoryName } = useParams();
	return (
		<section className={style.banner}>
			<div className={`${style["banner-wrap"]} container`}>
				<div className={style["left-banner"]}>
					<h2>{categoryName.replace(/-/g, " ")}</h2>
					<span className={style["show-line"]}></span>
				</div>
				<div className={style["right-banner"]}></div>
			</div>
		</section>
	);
};

export default Banner;
