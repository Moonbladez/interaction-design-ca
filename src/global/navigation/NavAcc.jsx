import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  RiAccountCircleLine,
  RiShoppingBasket2Line,
  RiSearchLine,
} from "react-icons/ri";

import styles from "./Navacc.module.scss";

export class NavAcc extends Component {
  render() {
    return (
      <nav className={styles.account}>
        <RiSearchLine />
        <NavLink to="/interaction-design/account">
          <RiAccountCircleLine />
        </NavLink>
        <NavLink to="/interaction-design/account">
          <RiShoppingBasket2Line />
        </NavLink>
      </nav>
    );
  }
}
