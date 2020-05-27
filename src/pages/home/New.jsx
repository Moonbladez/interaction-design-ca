import React, { Component } from "react";

import { ShoeCard } from "../../components/shoe-card/ShoeCard";

import Mens from "../../images/mens-card.jpg";
import Womens from "../../images/womens-card.jpg";

import styles from "New.module.scss";

export class New extends Component {
	render() {
		return (
			<section className={styles.new}>
				<h3>New In</h3>
				<ShoeCard image={"../../images/mens-card.jpg"} title={"mens shoes"} />
				<ShoeCard title={"lady shoe"} />
				<ShoeCard title={"another shoe"} />
			</section>
		);
	}
}
