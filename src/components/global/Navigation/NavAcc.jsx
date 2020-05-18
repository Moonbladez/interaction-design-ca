import React, { Component } from "react";
import {
	RiAccountCircleLine,
	RiShoppingBasket2Line,
	RiSearchLine,
} from "react-icons/ri";

import styles from "./navbar.module.scss";

export class NavAcc extends Component {
	render() {
		return (
			<nav className={styles.account}>
				<RiSearchLine />
				<RiAccountCircleLine />
				<RiShoppingBasket2Line />
			</nav>
		);
	}
}
