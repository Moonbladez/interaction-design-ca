import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import { fetchCategory } from "../../api/fetchProducts";
import { captitalizeFirstLetter } from "../../utils/modifiers";

import { ShoeCard } from "../../components/shoe-card/ShoeCard";
import { Layout } from "../layout/Layout";
import { BannerBottom } from "../../global/banner-bottom/BannerBottom";
import styles from "./Category.module.scss";

export class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const urlParamsCategory = this.props.match.params.category;
    const department = this.props.match.path.split("/")[1].split("-")[0];
    document.title = `Letha | ${captitalizeFirstLetter(
      department
    )}'s ${captitalizeFirstLetter(urlParamsCategory)}`;
    fetchCategory(this.props.fetchUrl, urlParamsCategory).then((products) => {
      this.setState({ products });
    });
  }

  renderCategory() {
    const folder = this.props.match.path.split("/")[1];
    const department = this.props.match.path.split("/")[2];
    return this.state.products.map((product) => {
      return (
        <ShoeCard
          path={`/${folder}/${department}`}
          product={product}
          key={uuidv4()}
        />
      );
    });
  }

  render() {
    console.log("Category: ", this.props);
    return (
      <Layout>
        <BannerBottom />
        <section className={styles.category}>
          <h2>{this.props.match.params.category}</h2>

          {this.renderCategory()}
        </section>
      </Layout>
    );
  }
}
