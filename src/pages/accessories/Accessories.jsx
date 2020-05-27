import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import { fetchAccessories } from "../../api/fetchAccessories";

import { Layout } from "../../components/layout/Layout";
import { Banner } from "../../global/banner/Banner";
import { ShoeCard } from "../../components/shoe-card/ShoeCard";

export class Accessories extends Component {
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
				<section>{this.renderShoeCard()}</section>
			</Layout>
		);
	}
}
