import React from "react";
import SliderImage from "react-zoom-slider";
import "./PDPSlider.scss";

const PDPSlider = ({ prodImages }) => {
	const data = prodImages?.map((item, i, arr) => {
		return { image: item, text: `` };
	});

	return (
		<SliderImage
			data={data}
			width="100%"
			showDescription={false}
			direction="right"
		/>
	);
};

export default PDPSlider;
