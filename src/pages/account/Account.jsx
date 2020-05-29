import React, { Component } from "react";

import { Layout } from "../../components/layout/Layout";
import { Login } from "../../components/forms/Login";
import { CreateAccount } from "../../components/forms/CreateAccount";
import { BannerBottom } from "../../global/banner-bottom/BannerBottom";

import styles from "./Account.module.scss";

export class Account extends Component {
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

        <section className={styles.account}>
          <Login />
          <CreateAccount />
        </section>
      </Layout>
    );
  }
}
