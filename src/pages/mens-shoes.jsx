import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { Layout } from "../components/Layout";
import { Banner } from "../components/global/Banner";
import { ShoeCard } from "../components/ShoeCard";
import styles from "../styles/mens-shoes.module.scss";

class MensShoe extends Component {
	renderShoeCard() {
		return this.props.data.map((data) => {
			return <ShoeCard shoeData={data} key={uuidv4()} />;
		});
	}

	render() {
		console.log("mens shoes", this.props.data);
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

export default MensShoe;
