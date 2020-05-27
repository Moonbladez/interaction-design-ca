import React, { Component } from "react";

import { Layout } from "../../components/layout/Layout";
import { Banner } from "../../global/banner/Banner";
import { BannerBottom } from "../../global/banner-bottom/BannerBottom";
import { ShoeShowcase } from "./ShoeShowcase";
/* import { New } from "../components/home/New";
import { About } from "../components/home/About"; */

import styles from "./Home.module.scss";

export class Home extends Component {
	render() {
		return (
			<Layout>
				<Banner
					title='Portsmouth Spring/Summer 2020'
					info='Check out out new collection of shoes in'
					className={styles.bannerHome}
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
