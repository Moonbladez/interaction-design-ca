import React, { Component } from "react";
import { v4 as uuid } from "uuid";

import { fetchProducts } from "../../api/fetchProducts";
import { captitalizeFirstLetter } from "../../utils/modifiers";

import { Layout } from "../layout/Layout";
import { BannerBottom } from "../../global/banner-bottom/BannerBottom";
import { Testimonial } from "../testimonial/Testimonial";
import { AnchorButton } from "../buttons/AnchorButton";
import { ProductGallery } from "../product-gallery/ProductsGaller";

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
      document.title = `Letha | ${captitalizeFirstLetter(product.name)}`;
    });
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
    const { name, category, price, description, images } = product;

    const membershipCost = Math.ceil(price - (price / 100) * 5);

    if (product) {
      return (
        <Layout>
          <BannerBottom />
          <section className={styles.section}>
            <ProductGallery images={images} />
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
              <a href="/" className={styles.basket_button}>
                Add To Basket
              </a>
              <a href="/" className={styles.buy_button}>
                Buy Now
              </a>
            </div>
            <div className={styles.share}>
              <a href="/">Share</a>
            </div>
            <div className={styles.description}>
              <h3>Description: </h3>
              <div>
                {description}
                <p>
                  Please be advised that due to the nature of being hand
                  painted, each pair will vary slightly in colour.
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
                name="steve rogers"
                job="first avenger"
                comment="Excellent purchase, and great cost"
                image="https://source.unsplash.com/WMD64tMfc4k/200x200"
                className="testimonial"
              />
              <Testimonial
                name="Tony Stark"
                job="playboy philanthropist"
                comment="Wow these shoes are great quality and arrived in the most gorgeous box"
                image="https://source.unsplash.com/h5cd51KXmRQ/200x200"
              />
            </div>
          </section>

          <section className={styles.upsell}>
            <h3>Other Styles:</h3>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img
                  src="/interaction-design/images/olivia-1.jpg"
                  alt="Olivia shoe"
                />
                <div>
                  <div className={styles.name}>Olivia Brogues</div>
                  <div>£200</div>
                  <AnchorButton
                    to="/interaction-design/womens-shoes/207"
                    content="buy now"
                  />
                </div>
              </div>
              <div className={styles.card}>
                <img
                  src="/interaction-design/images/emma-1.jpg"
                  alt="Emma shoe"
                />
                <div>
                  <div className={styles.name}>Emma Loafers</div>
                  <div>£250</div>
                  <AnchorButton
                    to="/interaction-design/womens-shoes/201"
                    content="buy now"
                  />
                </div>
              </div>
              <div className={styles.card}>
                <img
                  src="/interaction-design/images/ava-1.jpg"
                  alt="Ava shoe"
                />
                <div>
                  <div className={styles.name}>Ava Slippers</div>
                  <div>£300</div>
                  <AnchorButton
                    to="/interaction-design/womens-shoes/213"
                    content="buy now"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className={styles.crossSell}>
            <h3>Dont Forget:....</h3>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src="/interaction-design/images/belt.jpg" alt="a belt" />
                <div>
                  <div className={styles.name}>Italian Leather Belt</div>
                  <div>£50</div>
                  <AnchorButton
                    to="/interaction-design/accessories/303"
                    content="buy now"
                  />
                </div>
              </div>
              <div className={styles.card}>
                <img src="/interaction-design/images/wax.jpg" alt="shoe wax" />
                <div>
                  <div className={styles.name}>Clear Shoe Wax</div>
                  <div>£20</div>
                  <AnchorButton
                    to="/interaction-design/accessories/306"
                    content="buy now"
                  />
                </div>
              </div>
              <div className={styles.card}>
                <img
                  src="/interaction-design/images/shoebrush.jpg"
                  alt="shoe brush"
                />
                <div>
                  <div className={styles.name}>Shoe Brush</div>
                  <div>£20</div>
                  <AnchorButton
                    to="/interaction-design/accessories/305"
                    content="buy now"
                  />
                </div>
              </div>
            </div>
          </section>
        </Layout>
      );
    }
  }
}
