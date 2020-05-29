import React from "react";

import { Layout } from "../../components/layout/Layout";
import { BannerBottom } from "../../global/banner-bottom/BannerBottom";
import { AnchorButton } from "../../components/buttons/AnchorButton";

import styles from "./GiftCard.module.scss";

export class GiftCard extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.title = `Letha | ${this.props.title}`;
  }
  render() {
    return (
      <Layout>
        <BannerBottom />
        <section className={styles.gift_card}>
          <h2>Gift Cards</h2>
          <div className={styles.image}>
            <img src="./images/gift-card.png" alt="" />
          </div>
          <div className={styles.description}>
            Our Gift Cards can be used in any Letha store in the UK & the
            Republic of Ireland,or online. The maximum value that can be added
            to a gift card is £200. The minimum amount is £5.
            <a href="../pages/storeLocations.jsx">Find your local store</a>
          </div>
          <div className={styles.buttons}>
            {/* <AnchorButton
              to="/"
              content="buy gift cards"
              className={styles.buy}
            ></AnchorButton>
            <AnchorButton
              to="/"
              content="check balace"
              className={styles.balance}
            ></AnchorButton> */}
          </div>
        </section>
      </Layout>
    );
  }
}
