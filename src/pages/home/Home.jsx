import React, { Component } from "react";

import { Layout } from "../../components/layout/Layout";
import { Banner } from "../../global/banner/Banner";
import { BannerBottom } from "../../global/banner-bottom/BannerBottom";
import { Showcase } from "./Showcase";
import { Featured } from "../../components/featured/Featured";

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
				<Showcase />
				<Featured fetchUrl={"/db/mensShoes.json"} title='Mens Featured Shoes' />
				<Featured
					fetchUrl={"/db/womensShoes.json"}
					title='Womens Featured Shoes'
				/>
				<Featured
					fetchUrl={"/db/accessories.json"}
					title=' Featured Accessories'
				/>
			</Layout>
		);
	}
}
