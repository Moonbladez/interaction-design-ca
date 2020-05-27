import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import { fetchProducts } from "../../api/fetchProducts";

import { Layout } from "../../components/layout/Layout";
import { Banner } from "../../global/banner/Banner";
import { ShoeCard } from "../../components/shoe-card/ShoeCard";

import styles from "./WomensShoes.module.scss";

export class WomensShoes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
		};
	}

	componentDidMount() {
		fetchProducts(this.props.fetchUrl).then((products) => {
			this.setState({ products });
		});
	}

	renderShoeCard() {
		return this.state.products.map((product) => {
			return (
				<ShoeCard
					path={this.props.match.path}
					product={product}
					key={uuidv4()}
				/>
			);
		});
	}

	render() {
		return (
			<Layout>
				<Banner
					title='Mens Shoes'
					info='Finesse your look with a pair of mens shoes from Leathera. From brogues to loafers, we have something for every occasion.'
				/>
				<section className={styles.mensShoes}>{this.renderShoeCard()}</section>
			</Layout>
		);
	}
}
