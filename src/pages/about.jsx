import React, { Component } from "react";
import { Layout } from "../components/Layout";
import { Banner } from "../components/global/Banner";
import { BannerBottom } from "../components/global/BannerBottom/BannerBottom";
import AboutImageOne from "../images/about-1.jpg";
import AboutImageTwo from "../images/about-2.jpg";
import AboutImageThree from "../images/about-3.jpg";

import AboutImageFour from "../images/about-4.jpg";

import styles from "../about/about.module.scss";

class About extends Component {
	render() {
		return (
			<Layout>
				<Banner title='Our Story' />
				<BannerBottom />

				<section className={styles.about}>
					<div className={styles.row}>
						<img src={AboutImageOne} alt='about' className={styles.image} />
						<div className={styles.text}>
							<p>
								Founded in 1817 in London, Letha specialises in the manufacture
								of high quality leather shoes. Each year Letha produces over
								100,000 pair of hand crafted shoes every year.
							</p>
							<p>
								Only carefully selected leathers are used for the upper of the
								shoes. Many of the same styles that was used at Letha's original
								shoes are still used today. Including, handpaining and slow
								natural drying
							</p>
							<p>
								To this day. the business is owned by the same family, who
								emphesise quality and style above all.
							</p>
						</div>
					</div>
				</section>

				<div className={styles.photoGallery}>
					<div className={styles.photo}>
						<img src={AboutImageTwo} alt='' className={styles.image} />
					</div>
					<div className={styles.photo}>
						<img src={AboutImageThree} alt='' className={styles.image} />
					</div>
					<div className={styles.photo}>
						<img src={AboutImageFour} alt='' className={styles.image} />
					</div>
				</div>
			</Layout>
		);
	}
}

export default About;
