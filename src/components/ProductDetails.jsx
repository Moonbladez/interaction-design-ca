import React from "react";

const ProductDetails = (props) => {
	console.log("product details", props.data);
	return <h3>{props.name}</h3>;
};

export default ProductDetails;
