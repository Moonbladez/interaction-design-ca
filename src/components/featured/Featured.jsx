import React, { Component } from "react";
import { v4 as uuid } from "uuid";

import { fetchProducts } from "../../api/fetchProducts";

import { ShoeCard } from "../shoe-card/ShoeCard";

import styles from "./Featured.module.scss";

export class Featured extends Component {
	constructor(props) {
		super(props);

		this.state = { products: [], accessorydata: [] };
	}

	componentDidMount() {
		fetchProducts(this.props.fetchUrl).then((product) => {
			this.setState({ products: product });
		});
	}

	renderFeatured() {
		const filteredByFeatured = this.state.products.filter(
			(product) => product.featured
		);
		const featuredProducts = filteredByFeatured.map((featured) => {
			return (
				<ShoeCard product={featured} key={uuid()} path={this.props.path} />
			);
		});

		return featuredProducts;
	}
	render() {
		return (
			<section className={styles.featured}>
				<h3>{this.props.title}</h3>
				{this.renderFeatured()}
			</section>
		);
	}
}
