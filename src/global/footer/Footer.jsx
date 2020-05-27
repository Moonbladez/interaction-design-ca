import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";
import { RiTwitterLine, RiLinkedinLine, RiGithubLine } from "react-icons/ri";
import { FaCcPaypal, FaCcMastercard, FaCcVisa } from "react-icons/fa";

import {
	customerServiceLinks,
	informationLinks,
	legalLinks,
} from "../../config/subNav";

import styles from "./Footer.module.scss";

export class Footer extends Component {
	render() {
		return (
			<footer className={styles.footer}>
				<nav>
					<div>
						<h4>Customer Service</h4>
						<ul>
							{customerServiceLinks.map((link) => {
								return (
									<li key={uuidv4()}>
										<NavLink to={link.path}>{link.text}</NavLink>
									</li>
								);
							})}
						</ul>
					</div>

					<div>
						<h4>Information</h4>
						<ul>
							{informationLinks.map((link) => {
								return (
									<li key={uuidv4()}>
										<NavLink to={link.path}>{link.text}</NavLink>
									</li>
								);
							})}
						</ul>
					</div>

					<div>
						<h4>Legal</h4>
						<ul>
							{legalLinks.map((link) => {
								return (
									<li key={uuidv4()}>
										<NavLink to={link.path}>{link.text}</NavLink>
									</li>
								);
							})}
						</ul>
					</div>
				</nav>
				<div className={styles.sub}>
					<div className={styles.social}>
						<ul className={styles.social}>
							<li>
								<a
									href='https://twitter.com/jegheterbekki'
									target='_blank'
									rel='noopener noreferrer'
								>
									<RiTwitterLine />
								</a>
							</li>
							<li>
								<a
									href='https://github.com/Moonbladez'
									target='_blank'
									rel='noopener noreferrer'
								>
									<RiGithubLine />
								</a>
							</li>
							<li>
								<a
									href='https://www.linkedin.com/in/rebecca-young83/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<RiLinkedinLine />
								</a>
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
