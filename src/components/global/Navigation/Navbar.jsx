import React, { Component } from "react";
import { NavLinks } from "./NavLinks";
import { NavAcc } from "./NavAcc";
import styles from "./navbar.module.scss";
import { NavLink } from "react-router-dom";

export class Navbar extends Component {
	render() {
		return (
			<nav className={styles.navbar__main}>
				<NavLink to={"/"}>
					<h1>Lethra</h1>
				</NavLink>

				<NavLinks></NavLinks>

				<NavAcc></NavAcc>
			</nav>
		);
	}
}
