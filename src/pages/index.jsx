import React, { Component } from "react";
import { Layout } from "../components/Layout";
import { Banner } from "../components/global/Banner";
import { ShoeCard } from "../components/global/ShoeCard";

class Home extends Component {
	render() {
		return (
			<Layout>
				<Banner
					title='Portsmouth Spring/Summer 2020'
					info='Check out out new collection of shoes in'
					className='banner__home'
				/>
				<section>
					<ShoeCard />
				</section>
			</Layout>
		);
	}
}

export default Home;
