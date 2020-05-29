import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import { fetchProducts } from "../../api/fetchProducts";

import { Layout } from "../../components/layout/Layout";
import { Banner } from "../../global/banner/Banner";
import { ShoeCard } from "../../components/shoe-card/ShoeCard";

export class Accessories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    document.title = `Letha | ${this.props.title}`;
    fetchProducts(this.props.fetchUrl).then((products) => {
      this.setState({ products });
    });
  }

  renderShoeCard() {
    return this.state.products.map((product) => {
      return (
        <ShoeCard
          path={this.props.match.path}
          product={product}
          key={uuidv4()}
        />
      );
    });
  }

  render() {
    return (
      <Layout>
        <Banner
          title="Accessories"
          info="Finish off your outfit with a range of quality leather accessories"
        />
        <section>{this.renderShoeCard()}</section>
      </Layout>
    );
  }
}
