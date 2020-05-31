import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { Home } from "../pages/home/Home";
import { About } from "../pages/about/About";
import { Accessories } from "../pages/accessories/Accessories";
import { Account } from "../pages/account/Account";
import { Contact } from "../pages/contact/Contact";
import { Delivery } from "../pages/delivery/Delivery";
import { GiftCard } from "../pages/gift-card/GiftCard";
import { Privacy } from "../pages/privacy/Privacy";
import { Returns } from "../pages/returns/Returns";
import { ShoeCare } from "../pages/shoe-care/ShoeCare";
import { StoreLocations } from "../pages/store-locations/StoreLocations";
import { Products } from "../pages/products/Products";
import { ProductDetails } from "../components/product-details/ProductDetails";
import { Category } from "../components/category/Category";

import styles from "./App.module.scss";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/interaction-design"
            render={(routerProps) => <Home {...routerProps} />}
          />

          <Route
            exact
            path="/interaction-design/womens-shoes"
            render={(routerProps) => (
              <Products
                {...routerProps}
                fetchUrl={"/db/womensShoes.json"}
                key={uuid()}
              />
            )}
          />

          <Route
            exact
            path="/interaction-design/womens-shoes/:productid"
            render={(routerProps) => {
              return (
                <ProductDetails
                  {...routerProps}
                  fetchUrl={"/db/womensShoes.json"}
                  key={uuid()}
                />
              );
            }}
          />

          <Route
            exact
            path="/interaction-design/womens-shoes/category/:category"
            render={(routerProps) => {
              return (
                <Category
                  {...routerProps}
                  fetchUrl={"/db/womensShoes.json"}
                  key={uuid()}
                />
              );
            }}
          />

          <Route
            exact
            path="/interaction-design/accessories"
            render={(routerProps) => (
              <Products
                {...routerProps}
                fetchUrl={"/db/accessories.json"}
                key={uuid()}
              />
            )}
          />

          <Route
            exact
            path="/interaction-design/accessories/:productid"
            render={(routerProps) => {
              return (
                <ProductDetails
                  {...routerProps}
                  fetchUrl={"/db/accessories.json"}
                  key={uuid()}
                />
              );
            }}
          />

          <Route
            exact
            path="/interaction-design/accessories/category/:category"
            render={(routerProps) => (
              <Category
                {...routerProps}
                fetchUrl={"/db/accessories.json"}
                key={uuid()}
              />
            )}
          />

          <Route
            exact
            path="/interaction-design/delivery-info"
            render={(routerProps) => (
              <Delivery {...routerProps} title="Delivery Information" />
            )}
          />
          <Route
            exact
            path="/interaction-design/returns-info"
            render={(routerProps) => (
              <Returns {...routerProps} title="Returns Information" />
            )}
          />
          <Route
            exact
            path="/interaction-design/shoe-care"
            render={(routerProps) => (
              <ShoeCare {...routerProps} title="Shoe Care" />
            )}
          />
          <Route
            exact
            path="/interaction-design/cookies"
            component={Privacy}
            title="Cookie Information"
          />
          <Route
            exact
            path="/interaction-design/store-information"
            component={StoreLocations}
            title="Store Information"
          />
          <Route
            exact
            path="/interaction-design/about-us"
            component={About}
            title="About us"
          />
          <Route
            exact
            path="/interaction-design/contact"
            render={(routerProps) => (
              <Contact {...routerProps} title="Contact" />
            )}
          />
          <Route
            exact
            path="/interaction-design/account"
            render={(routerProps) => (
              <Account {...routerProps} title="Account" />
            )}
          />
          <Route
            exact
            path="/interaction-design/gift-card"
            render={(routerProps) => (
              <GiftCard {...routerProps} title="Gift Card" />
            )}
          />

          <Route
            exact
            path="/interaction-design/mens-shoes"
            render={(routerProps) => (
              <Products
                {...routerProps}
                fetchUrl={"/db/mensShoes.json"}
                key={uuid()}
              />
            )}
          />

          <Route
            exact
            path="/interaction-design/mens-shoes/:productid"
            render={(routerProps) => {
              return (
                <ProductDetails
                  {...routerProps}
                  fetchUrl={"/db/mensShoes.json"}
                  key={uuid()}
                />
              );
            }}
          />

          <Route
            exact
            path="/interaction-design/mens-shoes/category/:category"
            render={(routerProps) => {
              return (
                <Category
                  {...routerProps}
                  fetchUrl={"/db/mensShoes.json"}
                  key={uuid()}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}
