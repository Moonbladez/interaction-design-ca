import React, { Component } from "react";

import { FaShuttleVan } from "react-icons/fa";
import { MdAssignmentReturn } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

import styles from "./banner-bottom.module.scss";

export class BannerBottom extends Component {
	render() {
		return (
			<div className={styles.bannerBottom}>
				<div className={styles.box}>
					<FaShuttleVan />
					<p>Free Delivery</p>
				</div>
				<div className={styles.box}>
					<MdAssignmentReturn />
					<p>Free Returns</p>
				</div>
				<div className={styles.box}>
					<RiSecurePaymentLine />
					<p>Safe, secure payment </p>
				</div>
			</div>
		);
	}
}
