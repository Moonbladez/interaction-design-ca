import React, { Component } from "react";
import { Layout } from "../components/Layout";
import { Banner } from "../components/global/Banner";

class Home extends Component {
	render() {
		return (
			<Layout>
				<Banner
					title='Portsmouth Spring/Summer 2020'
					info='Check out out new collection of shoes in'
					className='banner__home'
				/>
			</Layout>
		);
	}
}

export default Home;
