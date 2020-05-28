import React, { Component } from "react";

import { FaAngleDown } from "react-icons/fa";

import { NavAcc } from "./NavAcc";
import styles from "./navbar.module.scss";
import { NavLink, Link } from "react-router-dom";
import { MegaMenu } from "./MegaMenu";

export class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: {
				womensShoesSubnav: false,
				mensShoesSubnav: false,
				accessoriesSubnav: false,
			},
		};
	}

	handleWomensOpenSubnav = (event) => {
		event.preventDefault();
		this.setState({
			isOpen: {
				womensShoesSubnav: true,
				mensShoesSubnav: false,
				accessoriesSubnav: false,
			},
		});
	};

	handleMensOpenSubnav = (event) => {
		event.preventDefault();
		this.setState({
			isOpen: {
				womensShoesSubnav: false,
				mensShoesSubnav: true,
				accessoriesSubnav: false,
			},
		});
	};

	handleAccessoriesOpenSubnav = (event) => {
		event.preventDefault();
		this.setState({
			isOpen: {
				womensShoesSubnav: false,
				mensShoesSubnav: false,
				accessoriesSubnav: true,
			},
		});
	};
	render() {
		return (
			<>
				<nav className={styles.navbar__main}>
					<NavLink to={"/"}>
						<h1>Letha</h1>
					</NavLink>

					<ul className={styles.main_links}>
						<li>
							<Link onClick={this.handleWomensOpenSubnav}>
								Womens <FaAngleDown />
							</Link>
						</li>
						<li>
							<Link onClick={this.handleMensOpenSubnav}>
								Mens Shoes <FaAngleDown />
							</Link>
						</li>
						<li>
							<Link onClick={this.handleAccessoriesOpenSubnav}>
								Accessories <FaAngleDown />
							</Link>
							<a></a>
						</li>
						<li>
							<NavLink to='/about-us'>About</NavLink>
						</li>
					</ul>

					<NavAcc></NavAcc>
				</nav>
				<MegaMenu isOpen={this.state.isOpen} />
			</>
		);
	}
}
