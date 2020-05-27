import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { fetchMensShoes } from "../api/fetchMensShoes";
import { fetchWomensShoes } from "../api/fetchWomensShoes";

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

import styles from "./App.module.scss";

export class App extends Component {
	constructor(props) {
		super(props);

		// this.state = {
		// 	mensData: [],
		// 	womensData: [],
		// };
	}

	componentDidMount() {
		// fetchMensShoes().then((mensData) => {
		// 	this.setState({ mensData });
		// });
		// fetchWomensShoes().then((womensData) => {
		// 	this.setState({ womensData });
		// });
	}

	render() {
		return (
			<div className='App'>
				<Switch>
					<Route exact path='/' component={Home} />

					<Route
						exact
						path='/womens-shoes'
						render={(routerProps) => (
							<Products {...routerProps} fetchUrl={"/db/womensShoes.json"} />
						)}
					/>

					<Route
						exact
						path='/womens-shoes/:productid'
						render={(routerProps) => {
							return (
								<ProductDetails
									{...routerProps}
									fetchUrl={"/db/womensShoes.json"}
								/>
							);
						}}
					/>
					{/*
					<Route exact path='/accessories' component={Accessories} />
					<Route exact path='/delivery-info' component={Delivery} />
					<Route exact path='/returns-info' component={Returns} />
					<Route exact path='/shoe-care' component={ShoeCare} />
					<Route exact path='/cookies' component={Privacy} />
					<Route exact path='/store-information' component={StoreLocations} />
					<Route exact path='/about-us' component={About} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/account' component={Account} />
					<Route exact path='/gift-card' component={GiftCard} />

					{/* 	<Route exact path='/mens-shoes' component={MensShoes} /> */}
					<Route
						exact
						path='/mens-shoes'
						render={(routerProps) => (
							<Products {...routerProps} fetchUrl={"/db/mensShoes.json"} />
						)}
					/>

					<Route
						exact
						path='/mens-shoes/:productid'
						render={(routerProps) => {
							return (
								<ProductDetails
									{...routerProps}
									fetchUrl={"/db/mensShoes.json"}
								/>
							);
						}}
					/>
				</Switch>
			</div>
		);
	}
}
