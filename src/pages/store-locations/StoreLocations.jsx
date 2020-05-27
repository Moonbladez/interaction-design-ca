import React, { Component } from "react";

import { Layout } from "../../components/layout/Layout";
import { BannerBottom } from "../../global/banner-bottom/BannerBottom";
import { StoreCard } from "../../components/store-card/StoreCard";
import {
	locationOne,
	locationTwo,
	locationThree,
} from "../../config/storeLocations";

import styles from "./StoreLocations.module.scss";

export class StoreLocations extends Component {
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
