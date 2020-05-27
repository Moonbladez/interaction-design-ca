import React from "react";
import { AiFillStar } from "react-icons/ai";
export const Testimonial = (props) => {
	return (
		<article>
			<img src={props.image} alt={props.name} />
			<q>{props.comment}</q>
			<p>{props.name}</p>
			<small>{props.job}</small>
			<div>
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
			</div>
		</article>
	);
};
