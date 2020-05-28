import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import styles from "./MegaMenu.module.scss";

export class MegaMenu extends Component {



	
	renderWomensSubnav() {
		return (
			<nav>
				<h6>
					<a href='/womens-shoes'>All Womens Shoes</a>
				</h6>
				<ul>
					<li>
						<NavLink exact to='/womens-shoes/${categeory}'>
							Womens brogues
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/womens-shoes/oxfords'>
							Womens oxfords
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/womens-shoes/loafers'>
							Womens loafers
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/womens-shoes/boots'>
							Womens boots
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/womens-shoes/slippers'>
							Womens slippers
						</NavLink>
					</li>
				</ul>
			</nav>
		);
	}

	renderMensSubnav() {
		return (
			<nav>
				<h6>
					<a href='/mens-shoes'>All Mens Shoes</a>
				</h6>
				<ul>
					<ul>
						<li>
							<NavLink exact to='/mens-shoes/brogues'>
								mens brogues
							</NavLink>
						</li>
						<li>
							<NavLink exact to='/mens-shoes/oxfords'>
								mens oxfords
							</NavLink>
						</li>
						<li>
							<NavLink exact to='/mens-shoes/loafers'>
								mens loafers
							</NavLink>
						</li>
						<li>
							<NavLink exact to='/mens-shoes/boots'>
								mens derbys
							</NavLink>
						</li>
					</ul>
				</ul>
			</nav>
		);
	}

	renderAccessoriesSubNav() {
		return (
			<nav>
				<h6>
					<a href='/accessories'>All Accessories</a>
				</h6>
				<ul>
					<li>
						<NavLink exact to='/accessories/belts'>
							belts
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/accessories/bags'>
							bags
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/accessories/shoe-care'>
							shoe care
						</NavLink>
					</li>
				</ul>
			</nav>
		);
	}

	render() {
		return (
			<div className={styles.megamenu}>
				{this.props.isOpen.womensShoesSubnav && this.renderWomensSubnav()}
				{this.props.isOpen.mensShoesSubnav && this.renderMensSubnav()}
				{this.props.isOpen.accessoriesSubnav && this.renderAccessoriesSubNav()}
			</div>
		);
	}
}
