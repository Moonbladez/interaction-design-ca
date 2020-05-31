import React, { Component } from "react";

import { FaAngleDown } from "react-icons/fa";

import { NavAcc } from "./NavAcc";
import styles from "./navbar.module.scss";
import { NavLink, Link } from "react-router-dom";
import { MegaMenu } from "./MegaMenu";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: {
        womensShoesSubnav: false,
        mensShoesSubnav: false,
        accessoriesSubnav: false,
      },
    };
  }

  handleWomensOpenSubnav = (event) => {
    event.preventDefault();
    this.setState({
      isOpen: {
        womensShoesSubnav: true,
        mensShoesSubnav: false,
        accessoriesSubnav: false,
      },
    });
  };

  handleMensOpenSubnav = (event) => {
    event.preventDefault();
    this.setState({
      isOpen: {
        womensShoesSubnav: false,
        mensShoesSubnav: true,
        accessoriesSubnav: false,
      },
    });
  };

  handleAccessoriesOpenSubnav = (event) => {
    event.preventDefault();
    this.setState({
      isOpen: {
        womensShoesSubnav: false,
        mensShoesSubnav: false,
        accessoriesSubnav: true,
      },
    });
  };
  render() {
    return (
      <>
        <nav className={styles.navbar__main}>
          <NavLink to={"/interaction-design"}>
            <h1>Letha</h1>
          </NavLink>

          <ul className={styles.main_links}>
            <li>
              <a onClick={this.handleWomensOpenSubnav}>
                Womens <FaAngleDown />
              </a>
            </li>
            <li>
              <a onClick={this.handleMensOpenSubnav}>
                Mens Shoes <FaAngleDown />
              </a>
            </li>
            <li>
              <a onClick={this.handleAccessoriesOpenSubnav}>
                Accessories <FaAngleDown />
              </a>
              <a></a>
            </li>
            <li>
              <NavLink to="/interaction-design/about-us">About</NavLink>
            </li>
          </ul>

          <NavAcc></NavAcc>
        </nav>
        <MegaMenu isOpen={this.state.isOpen} />
      </>
    );
  }
}
