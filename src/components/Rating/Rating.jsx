import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";

let totalStars = 5;
const Ratings = ({ rating }) => {
	// const starPercentage = (rating / totalStars) * 100;
	// const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
	return (
		<>
			<Rating
				name="half-rating-read"
				value={rating}
				precision={0.5}
				max={totalStars}
				emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
				readOnly
			/>
		</>
	);
};

export default Ratings;
