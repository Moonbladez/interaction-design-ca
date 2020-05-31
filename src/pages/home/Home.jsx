import React, { Component } from "react";

import { Layout } from "../../components/layout/Layout";
import { Banner } from "../../global/banner/Banner";
import { BannerBottom } from "../../global/banner-bottom/BannerBottom";
import { Showcase } from "./Showcase";
import { Featured } from "../../components/featured/Featured";

import styles from "./Home.module.scss";
import { AnchorButton } from "../../components/buttons/AnchorButton";

export class Home extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log("Home", this.props);
		return (
			<Layout>
				<Banner
					title='Portsmouth Spring/Summer 2020'
					info='Check out out new collection of shoes in'
					className={styles.bannerHome}
				/>
				<BannerBottom />
				<Showcase />
				<Featured
					fetchUrl={"/db/mensShoes.json"}
					title='Mens Featured Shoes'
					path={"mens-shoes"}
				/>
				<Featured
					fetchUrl={"/db/womensShoes.json"}
					title='Womens Featured Shoes'
					path={"womens-shoes"}
				/>
				<Featured
					fetchUrl={"/db/accessories.json"}
					title=' Featured Accessories'
					path={"accessories"}
				/>
				<section className={styles.info}>
					<div className={styles.about}>
						<h4>About Letha</h4>
						<p>
							Letha Shoes has been an English tradition since 1900. Discover our
							dedication to craftmanship
						</p>
						<AnchorButton to='/about-us' content='more about Letha' />
					</div>
					<div className={styles.stores}>
						<h4>Visit our stores</h4>
						<p>
							Letha has a collection of stores around London and Stavanger.
							Explore our locations and opening times
						</p>
						<AnchorButton to='/store-information' content='our stores' />
					</div>
				</section>
			</Layout>
		);
	}
}
