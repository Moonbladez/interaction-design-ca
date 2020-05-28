import React from "react";
import { Link } from "react-router-dom";

import styles from "./ShoeCard.module.scss";

export const ShoeCard = (props) => {
	const { name, images, category, price, productid, featured } = props.product;
	const membershipCost = Math.ceil(price - (price / 100) * 5);
	return (
		<div className={styles.shoeCard} data-productid={productid}>
			<img src={images[0]} alt={`the ${name} shoe`} />
			<div className={styles.body}>
				<h5 className={styles.name}>{name}</h5>
				<p className={styles.category}>{category}</p>
				<p className={styles.price}>£{price}</p>
				<p className={styles.membership}>member price £{membershipCost}</p>

				<Link to={`${props.path}/${productid}`} {...props}>
					Buy Now
				</Link>
			</div>
		</div>
	);
};
