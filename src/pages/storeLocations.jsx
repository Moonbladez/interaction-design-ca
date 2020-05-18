import React, { Component } from "react";
import { Layout } from "../components/Layout";
import { BannerBottom } from "../components/global/BannerBottom/BannerBottom";
import styles from "../storeLocations/storeLocations.module.scss";
import { StoreCard } from "../components/StoreCard";
import {
	locationOne,
	locationTwo,
	locationThree,
} from "../components/config/store-locations";

class WomensShoes extends Component {
	render() {
		return (
			<Layout>
				<BannerBottom />
				<section className={styles.storeLocations}>
					<h2>Our Stores</h2>
					<StoreCard config={locationOne} />
					<StoreCard config={locationTwo} />
					<StoreCard config={locationThree} />
				</section>
			</Layout>
		);
	}
}

export default WomensShoes;
