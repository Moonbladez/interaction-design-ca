import React, { Component } from "react";

import { Layout } from "../../components/layout/Layout";
import { BannerBottom } from "../../global/banner-bottom/BannerBottom";

import styles from "./Delivery.module.scss";

export class Delivery extends Component {
	render() {
		return (
			<Layout>
				{/* <Banner
					title='Delivery Information'
					info='Check out out new collection of shoes in'
					className='banner__home'
				/> */}
				<BannerBottom />

				<section className={styles.delivery}>
					<h2>Delivery Information</h2>
					<p>
						UK to include England, Scotland, Wales. Excluding Scottish Highlands
						and Islands
					</p>
					<table>
						<thead>
							<tr>
								<th>Delivery Type</th>
								<th>Time</th>
								<th>Cost</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Standard</td>
								<td>2-3 working days</td>
								<td>Free</td>
							</tr>
							<tr>
								<td>Next Working Day</td>
								<td>anytime</td>
								<td>£6*</td>
							</tr>
							<tr>
								<td>Next Working Day </td>
								<td>before 10am</td>
								<td>£12*</td>
							</tr>
							<tr>
								<td>Saturday</td>
								<td>anytime</td>
								<td>£9</td>
							</tr>
							<tr>
								<td>Saturday</td>
								<td>before midday</td>
								<td>£13</td>
							</tr>
							<tr>
								<td>Northern Ireland Standard</td>
								<td>3-5 days</td>
								<td>£5</td>
							</tr>
						</tbody>
						<caption>
							* Any Next Working Day and Saturday deliveries are only available
							on orders placed before 3pm. We do not process orders over the
							weekend
						</caption>
					</table>
				</section>
			</Layout>
		);
	}
}
