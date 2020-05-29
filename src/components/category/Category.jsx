import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import { fetchCategory } from "../../api/fetchProducts";

import { ShoeCard } from "../../components/shoe-card/ShoeCard";
import { Layout } from "../layout/Layout";
import { BannerBottom } from "../../global/banner-bottom/BannerBottom";
import styles from "./Category.module.scss";

export class Category extends Component {
	constructor(props) {
		super(props);

		this.state = {
			products: [],
		};
	}

	componentDidMount() {
		const urlParamsCategory = this.props.match.params.category;

		fetchCategory(this.props.fetchUrl, urlParamsCategory).then((products) => {
			this.setState({ products });
		});
	}

	renderCategory() {
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
		console.log(this.props);
		return (
			<Layout>
				<BannerBottom />
				<section className={styles.category}>
					<h2>{this.props.match.params.category}</h2>

					{this.renderCategory()}
				</section>
			</Layout>
		);
	}
}
