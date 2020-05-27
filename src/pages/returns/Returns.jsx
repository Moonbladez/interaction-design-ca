import React, { Component } from "react";

import { Layout } from "../../components/layout/Layout";
import { BannerBottom } from "../../global/banner-bottom/BannerBottom";

import styles from "./Returns.module.scss";

export class Returns extends Component {
	render() {
		return (
			<Layout>
				<BannerBottom />
				<section className={styles.returns}>
					<h2>Returns Information</h2>
					<div className={styles.text}>
						<p>
							Lethera offers the facility to return goods by obtaining a full
							Refund or Exchange for an item of the same value, within 28 days
							of delivery excluding return postage charges.
						</p>
						<p>
							In the unlikely event that you find a fault, Lethera will refund
							in full including Return postage charges after inspection of the
							returned items. If on inspection we cannot find a fault we may
							return your purchase to you and prior to dispatch, we may charge
							you the delivery fee applicable to your location.
						</p>
						<p>
							Belts are cut to size on order. For this reason, all belts are
							non-returnable
							<small>(this does not affect your statutory rights)</small>
						</p>
						<p>
							Goods are returned at the customer's expense. We recommend that
							you obtain proof of postage and retain this until the
							refund/exchange has been processed.
						</p>
						<p>
							Once the returned item is received a refund will be credited to
							the payment card or PayPal account within 2 weeks. Please note
							that it may take up to 14 days for your bank to credit your
							account. Barker Shoes are not liable and cannot take
							responsibility for any bank charges that you may incur during the
							refund process.
						</p>
					</div>

					<h3>Proof of Purchase</h3>
					<div className={styles.text}>
						<p>
							Returns & refunds will only be accepted with a receipt, dispatch
							note or another proof of purchase and clearly stating the reason
							for the return.
						</p>
					</div>

					<h3>Returns Procedure</h3>
					<div className={styles.text}>
						<p>
							Please fill in the returns form that was enclosed in with your
							goods. This must be returned with the goods including proof of
							purchase to the following address:
						</p>
						<address>
							FAO Leathera Returns Department 658 Mill Road London SE03 5IW
						</address>
					</div>
				</section>
			</Layout>
		);
	}
}
