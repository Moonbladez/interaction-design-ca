import React from "react";
import styles from "./shoeCard.module.scss";

import { Link } from "react-router-dom";

export const ShoeCard = (props) => {
	const { name, images, category, price, productId } = props.shoeData;
	const membershipCost = Math.ceil(price - (price / 100) * 5);
	console.log("shoecard", props.shoeData);
	return (
		<Link to={`mens-shoes/product/${name}`}>
			<div className={styles.shoeCard} data-productid={productId}>
				<img src={images[0]} alt={`the ${name} shoe`} />
				<div className={styles.body}>
					<h5 className={styles.name}>{name}</h5>
					<p className={styles.category}>{category}</p>
					<p className={styles.price}>£{price}</p>
					<p className={styles.membership}>member price £{membershipCost}</p>
					{/* 	<AnchorButton content='Buy' location={`/${name}`}></AnchorButton> */}
				</div>
			</div>
		</Link>
	);
};
