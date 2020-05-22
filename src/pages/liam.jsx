import React, { Component } from "react";
import { Layout } from "../components/Layout";
import { BannerBottom } from "../components/global/BannerBottom/BannerBottom";

import { fetchMensShoes } from "../api/fetchMensShoes";

export class Liam extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}

	componentDidMount() {
		fetchMensShoes().then((data) => {
			this.setState({ data });
		});
	}

	render() {
		return (
			<Layout>
				<BannerBottom />

				<h1>Argh</h1>
			</Layout>
		);
	}
}
