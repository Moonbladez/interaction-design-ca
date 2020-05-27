import React, { Component } from "react";
import { v4 as uuid } from "uuid";

import { fetchProducts } from "../../api/fetchProducts";
import { fetchAccessories } from "../../api/fetchAccessories";

import { Layout } from "../layout/Layout";
import { BannerBottom } from "../../global/banner-bottom/BannerBottom";
import { Testimonial } from "../testimonial/Testimonial";

import styles from "./ProductDetails.module.scss";

export class ProductDetails extends Component {
	constructor(props) {
		super(props);
		this.state = { product: {}, accessorydata: [] };
	}
	componentDidMount() {
		const urlParamId = this.props.match.params.productid;
		fetchProducts(this.props.fetchUrl, urlParamId).then((product) => {
			this.setState({ product });
		});

		fetchAccessories().then((accessorydata) => {
			this.setState({ accessorydata });
		});
	}

	renderImageGallery() {
		const { images, name } = this.state.product;
		if (images) {
			const imageGallery = images.map((image, index) => {
				if (index === 0) {
					return (
						<div className={styles.main_image} data-index={index} key={uuid()}>
							<img src={image} alt={name} />
						</div>
					);
				}
				return (
					<div className={styles.images} data-index={index} key={uuid()}>
						<img src={image} alt={name} />
					</div>
				);
			});

			return imageGallery;
		}
	}

	renderColorList() {
		const { colors } = this.state.product;
		if (colors) {
			const colorList = Object.keys(colors).map((color) => {
				return (
					<div className={styles.swatch} key={uuid()}>
						<small>{color}</small>
						<img src={colors[color]} alt={color} />
					</div>
				);
			});
			return colorList;
		}
	}

	renderSizeList() {
		const { sizes } = this.state.product;
		if (sizes) {
			const sizeList = sizes.map((size) => {
				return <li key={uuid()}>{size}</li>;
			});
			return sizeList;
		}
	}

	renderFeaturesList() {
		const { features } = this.state.product;
		if (features) {
			return Object.keys(features).map((label) => {
				return (
					<li key={uuid()}>
						<span>{label}:</span> {features[label]}
					</li>
				);
			});
		}
	}

	render() {
		const { product } = this.state;
		const { name, category, price, membershipCost, description } = product;
		if (product) {
			return (
				<Layout>
					<BannerBottom />
					<section className={styles.section}>
						{this.renderImageGallery()}
						<div className={styles.name}>
							<h2>{name}</h2>
						</div>
						<div className={styles.category}>{category}</div>
						<div className={styles.color}>{this.renderColorList()}</div>
						<div className={styles.price}>
							<span>£</span> {price}
						</div>
						<div className={styles.membership_price}>
							Membership price: £{membershipCost}
						</div>
						<div className={styles.size}>
							<ul>{this.renderSizeList()}</ul>
						</div>
						<div className={styles.button}>
							<a href='/' className={styles.basket_button}>
								Add To Basket
							</a>
							<a href='/' className={styles.buy_button}>
								Buy Now
							</a>
						</div>
						<div className={styles.share}>
							<a href='/'>Share</a>
						</div>
						<div className={styles.description}>
							<h3>Description: </h3>
							<div>
								{description}
								<p>
									Please be advised that due to the nature of being hand
									painted, each pair will vary slightly in colour.{" "}
								</p>
							</div>
							<div className={styles.features}>
								<h4>The Features</h4>
								<ul>{this.renderFeaturesList()}</ul>
							</div>
						</div>
					</section>

					<section className={styles.testimonials}>
						<h3>Our stylish new customers</h3>
						<div className={styles.wrapper}>
							<Testimonial
								name='steve rogers'
								job='first avenger'
								comment='Excellent purchase, and great cost'
								image='https://source.unsplash.com/WMD64tMfc4k/200x200'
								className='testimonial'
							/>
							<Testimonial
								name='Tony Stark'
								job='playboy philanthropist'
								comment='Wow these shoes are great quality and arrived in the most gorgeous box'
								image='https://source.unsplash.com/h5cd51KXmRQ/200x200'
							/>
						</div>
					</section>

					<section>
						<h3>Other Styles:</h3>
					</section>

					<section>
						<h3>Dont Forget:....</h3>
					</section>
				</Layout>
			);
		}
		return <div className={styles.loader} />;
	}
}
