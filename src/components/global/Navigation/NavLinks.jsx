import React, { Component } from "react";
import links from "../../config/main-nav";
import { NavLink } from "react-router-dom";

import styles from "./navlinks.module.scss";

export class NavLinks extends Component {
	render() {
		return (
			<ul className={styles.links}>
				{links.map((link) => {
					return (
						<li>
							<NavLink
								to={link.path}
								activeClassName='active-link'
								key={link.id}
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
