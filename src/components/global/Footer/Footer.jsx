import React, { Component } from "react";
import styles from "./footer.module.scss";
import links from "../../config/sub-nav";
import { NavLink } from "react-router-dom";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { FaCcPaypal, FaCcMastercard, FaCcVisa } from "react-icons/fa";

export class Footer extends Component {
	render() {
		return (
			<footer className={styles.footer}>
				<nav>
					<div>
						<h4>Customer Service</h4>
						<ul>
							{links.map((link) => {
								if (link.section === "customer service")
									return <NavLink to={link.path}>{link.text}</NavLink>;
							})}
						</ul>
					</div>

					<div>
						<h4>Information</h4>
						<ul>
							{links.map((link) => {
								if (link.section === "information")
									return <NavLink to={link.path}>{link.text}</NavLink>;
							})}
						</ul>
					</div>

					<div>
						<h4>Legal</h4>
						<ul>
							{links.map((link) => {
								if (link.section === "legal")
									return <NavLink to={link.path}>{link.text}</NavLink>;
							})}
						</ul>
					</div>
				</nav>
				<div className={styles.sub}>
					<div className={styles.social}>
						<ul className={styles.social}>
							<li>
								<TiSocialTwitterCircular />
							</li>
							<li>
								<TiSocialTwitterCircular />
							</li>
							<li>
								<TiSocialTwitterCircular />
							</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>
								<FaCcPaypal />
							</li>
							<li>
								<FaCcMastercard />
							</li>
							<li>
								<FaCcVisa />
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.copyright}>
					<small>Design by Bulu Designs &copy;{new Date().getFullYear()}</small>
				</div>
			</footer>
		);
	}
}
