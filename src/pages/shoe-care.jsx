import React, { Component } from "react";
import { Layout } from "../components/Layout";
import { BannerBottom } from "../components/global/BannerBottom/BannerBottom";
import styles from "../shoe-care/shoe-care.module.scss";

class ShoeCare extends Component {
	render() {
		return (
			<Layout>
				<BannerBottom />
				<section className={styles.shoe_care}>
					<h2>Caring for your Letha shoes</h2>
					<div className={styles.text}>
						<strong>Congratulations on your new pair of Letha shoes</strong>
						<p>
							Your Letha Shoes have been manufactured through a combination of
							design, quality materials and craftsmanship developed in over 130
							years of shoemaking. They have been created using high-grade
							leathers which and will benefit from the following
							recommendations.
						</p>
						<p>
							We endeavour to make our shoes as comfortable as possible the
							first time you wear them, however, due to the durable nature of
							the Goodyear welted construction we would always advise that any
							new pair of shoes should be worn for short periods of time, to
							begin with to allow for bedding-in and to avoid discomfort.
						</p>
						<p>
							We would advise against the application of polish or shoe cream on
							Patent finished shoes. These finishes can be cleaned by wiping
							with a damp cloth. Always use a shoe horn when putting on the
							shoes to maintain the back shape.
						</p>
						<p>
							On the first few occasions wear your shoes in dry conditions as
							new leather soles can become slippery on wet surfaces.
						</p>
						<p>
							We advise that you should not wear your shoes on successive days
							as the fine leathers used in their manufacture need 24 hours to
							dry out from natural perspiration.
						</p>
						<p>
							If your shoes become very wet they should be allowed to dry out
							fully for a few days away from any source of direct heat, such as
							fires, radiators or hot pipes. If leather is dried too quickly it
							can burn or become brittle which will greatly accelerate its wear.
						</p>
						<p>
							Dry shoes should be kept on shoe trees to maintain their looks and
							shape. We advise the use of unfinished aromatic cedar trees as
							they absorb any residual moisture whilst also imparting a pleasant
							aroma.
						</p>
						<p>
							Regular cleaning and polishing of your Barker shoes will maintain
							the suppleness of the leathers and enhance their good looks.
						</p>
						<p>
							We recommend that your shoes should be wiped clean before applying
							a good quality shoe cream or wax polish with a suitable brush.
							Once this has been allowed to dry, remove excess polish with a
							soft brush before buffing to a rich patina.
						</p>
						<p>
							For suede leathers remove any dirt when dry and brush up the nap
							using a suede brush.
						</p>
						<p>
							Our shoe uppers are made from natural materials and additional
							care should be taken into account for delicate leathers such as
							deerskin, kid and suede when wearing them.
						</p>
						<p>
							We strongly recommend against the use of rubber additions to the
							soles or heels of your shoes as this will affect the comfort and
							balance of your shoes. It can also put excessive stress on the
							shoes which can, in turn, lead to premature wear.
						</p>
						<p>
							Lethera offer many products which are designed to help you care
							for your Lethera shoes which can be viewed within the
							<a href=''> shoe care section</a>
						</p>
					</div>
				</section>
			</Layout>
		);
	}
}

export default ShoeCare;
