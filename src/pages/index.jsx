import React, { Component } from "react";
import { Layout } from "../components/Layout";
import { Banner } from "../components/global/Banner";
import { ShoeShowcase } from "../home/ShoeShowcase";
/* import { New } from "../components/home/New";
import { About } from "../components/home/About"; */
import { BannerBottom } from "../components/global/BannerBottom/BannerBottom";

class Home extends Component {
	render() {
		return (
			<Layout>
				<Banner
					title='Portsmouth Spring/Summer 2020'
					info='Check out out new collection of shoes in'
					className='banner__home'
				/>
				<BannerBottom />
				<ShoeShowcase />
				{/* 				<New />
				<About
					title={"about letha"}
					information={
						"Leathera shoes have been an English tradition since 1900. Discover our dedication to craftmansip"
					}
				/>
				<About
					title={"visit our stores"}
					information={
						"Leathera has a collection of stores around London and Stavanger. Explore our locations and opening times"
					}
				/> */}
			</Layout>
		);
	}
}

export default Home;
