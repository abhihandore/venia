import React from "react";
import style from "./LoadingSpinner.module.scss";

const LoadingSpinner = ({ position }) => {
	return (
		<div className={`${style.spinner} ${position && style[position]}`}></div>
	);
};

export default LoadingSpinner;
