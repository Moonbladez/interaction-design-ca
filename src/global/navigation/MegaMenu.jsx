import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import styles from "./MegaMenu.module.scss";

export class MegaMenu extends Component {
  renderWomensSubnav() {
    return (
      <nav>
        <h6>
          <a href="/interaction-design/womens-shoes">All Womens Shoes</a>
        </h6>
        <ul>
          <li>
            <NavLink
              exact
              to="/interaction-design/womens-shoes/category/brogues"
            >
              Womens brogues
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/interaction-design/womens-shoes/category/oxfords"
            >
              Womens oxfords
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/interaction-design/womens-shoes/category/loafers"
            >
              Womens loafers
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/interaction-design/womens-shoes/category/boots">
              Womens boots
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/interaction-design/womens-shoes/category/slippers"
            >
              Womens slippers
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }

  renderMensSubnav() {
    return (
      <nav>
        <h6>
          <a href="/interaction-design/mens-shoes">All Mens Shoes</a>
        </h6>
        <ul>
          <ul>
            <li>
              <NavLink
                exact
                to="/interaction-design/mens-shoes/category/brogues"
              >
                mens brogues
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/interaction-design/mens-shoes/category/oxfords"
              >
                mens oxfords
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/interaction-design/mens-shoes/category/loafers"
              >
                mens loafers
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/interaction-design/mens-shoes/category/boots">
                mens derbys
              </NavLink>
            </li>
          </ul>
        </ul>
      </nav>
    );
  }

  renderAccessoriesSubNav() {
    return (
      <nav>
        <h6>
          <a href="/interaction-design/accessories">All Accessories</a>
        </h6>
        <ul>
          <li>
            <NavLink exact to="/interaction-design/accessories/category/belts">
              belts
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/interaction-design/accessories/category/bags">
              bags
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/interaction-design/accessories/category/shoe-care"
            >
              shoe care
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }

  render() {
    return (
      <div className={styles.megamenu}>
        {this.props.isOpen.womensShoesSubnav && this.renderWomensSubnav()}
        {this.props.isOpen.mensShoesSubnav && this.renderMensSubnav()}
        {this.props.isOpen.accessoriesSubnav && this.renderAccessoriesSubNav()}
      </div>
    );
  }
}
