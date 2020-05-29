import React, { Component } from "react";

import { AnchorButton } from "../../components/buttons/AnchorButton";

import MensShoes from "../../images/mens-card.jpg";
import WomensShoes from "../../images/womens-card.jpg";
import Accessories from "../../images/accessories-card.jpg";

import styles from "./Showcase.module.scss";

export class Showcase extends Component {
  render() {
    return (
      <section className={styles.wrapper}>
        <div className={styles.shoe_showcase}>
          <img src={MensShoes} alt="mens shoe section" />
          <AnchorButton content="Mens Shoes" to={"/mens-shoes"}></AnchorButton>
        </div>
        <div className={styles.shoe_showcase}>
          <img src={WomensShoes} alt="womens shoe section" />
          <AnchorButton
            content="Womens Shoes"
            to={"/womens-shoes"}
          ></AnchorButton>
        </div>
        <div className={styles.shoe_showcase}>
          <img src={Accessories} alt="accessories section" />
          <AnchorButton
            content="Accessories"
            to={"/accessories"}
          ></AnchorButton>
        </div>
      </section>
    );
  }
}
