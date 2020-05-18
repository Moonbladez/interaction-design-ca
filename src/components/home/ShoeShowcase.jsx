import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./shoe-showcase.module.scss";
import MensShoes from "../../images/mens-card.jpg";
import WomensShoes from "../../images/womens-card.jpg";
import Accessories from "../../images/accessories-card.jpg";
import { Button } from "../utils/Button";

export class ShoeShowcase extends Component {
	render() {
		return (
			<section className={styles.wrapper}>
					<div className={styles.shoe_showcase}>
						<img src={MensShoes} alt='mens shoe section' />
						<Button content='Mens Shoes'></Button>
					</div>
				<div>
					<img src={WomensShoes} alt='womens shoe section' />
					<Button content='Womens Shoes'></Button>
				</div>
				<div>
					<img src={Accessories} alt='accessories section' />
					<Button content='Accessories'></Button>
				</div>
			</section>
		);
	}
}
