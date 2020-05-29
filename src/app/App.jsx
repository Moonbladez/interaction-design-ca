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
            path="/"
            render={(routerProps) => <Home {...routerProps} />}
          />

          <Route
            exact
            path="/womens-shoes"
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
            path="/womens-shoes/:productid"
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
            path="/womens-shoes/category/:category"
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
            path="/accessories"
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
            path="/accessories/:productid"
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
            path="/accessories/category/:category"
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
            path="/delivery-info"
            render={(routerProps) => (
              <Delivery {...routerProps} title="Delivery Information" />
            )}
          />
          <Route
            exact
            path="/returns-info"
            render={(routerProps) => (
              <Returns {...routerProps} title="Returns Information" />
            )}
          />
          <Route
            exact
            path="/shoe-care"
            render={(routerProps) => (
              <ShoeCare {...routerProps} title="Shoe Care" />
            )}
          />
          <Route
            exact
            path="/cookies"
            component={Privacy}
            title="Cookie Information"
          />
          <Route
            exact
            path="/store-information"
            component={StoreLocations}
            title="Store Information"
          />
          <Route exact path="/about-us" component={About} title="About us" />
          <Route
            exact
            path="/contact"
            render={(routerProps) => (
              <Contact {...routerProps} title="Contact" />
            )}
          />
          <Route
            exact
            path="/account"
            render={(routerProps) => (
              <Account {...routerProps} title="Account" />
            )}
          />
          <Route
            exact
            path="/gift-card"
            render={(routerProps) => (
              <GiftCard {...routerProps} title="Gift Card" />
            )}
          />

          <Route
            exact
            path="/mens-shoes"
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
            path="/mens-shoes/:productid"
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
            path="/mens-shoes/category/:category"
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
