import React, { Component } from "react";
import links from "../../config/main-nav";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import styles from "./navlinks.module.scss";

export class NavLinks extends Component {
	render() {
		return (
			<ul className={styles.links}>
				{links.map((link) => {
					return (
						<li key={uuidv4()}>
							<NavLink
								exact
								to={link.path}
								activeStyle={{
									fontWeight: "bold",
									color: "black",
									textDecoration: "underline",
								}}
							>
								{link.text}
							</NavLink>
						</li>
					);
				})}
			</ul>
		);
	}
}
