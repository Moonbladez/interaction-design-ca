import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { Layout } from "../components/Layout";
import { Banner } from "../components/global/Banner";
import { fetchWomensShoes } from "../api/fetchWomensShoes";
import { ShoeCard } from "../components/ShoeCard";
import styles from "../styles/womens-shoes.module.scss";

class WomensShoes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}

	componentDidMount() {
		fetchWomensShoes().then((data) => {
			this.setState({ data });
		});
	}

	renderShoeCard() {
		return this.state.data.map((data) => {
			return <ShoeCard shoeData={data} key={uuidv4()} />;
		});
	}

	render() {
		return (
			<Layout>
				<Banner
					title='Womens Shoes'
					info='Finesse your look with a pair of mens shoes from Leathera. From brogues to loafers, we have something for every occasion.'
				/>
				<section className={styles.womensShoes}>
					{this.renderShoeCard()}
				</section>
			</Layout>
		);
	}
}

export default WomensShoes;
