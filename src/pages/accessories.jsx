import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { Layout } from "../components/Layout";
import { Banner } from "../components/global/Banner";
import { fetchMensShoes } from "../api/fetchMensShoes";
import { ShoeCard } from "../components/ShoeCard";
import styles from "../styles/mens-shoes.module.scss";
import { fetchAccessories } from "../api/fetchAccessories";

class Accessories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}

	componentDidMount() {
		fetchAccessories().then((data) => {
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
					title='Accessories'
					info='Finish off your outfit with a range of quality leather accessories'
				/>
				<section className={styles.mensShoes}>{this.renderShoeCard()}</section>
			</Layout>
		);
	}
}

export default Accessories;
