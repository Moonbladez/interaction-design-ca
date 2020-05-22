import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/index";
import WomensShoes from "./pages/womens-shoes";
import MensShoes from "./pages/mens-shoes";
import Delivery from "./pages/delivery";
import Returns from "./pages/returns";
import ShoeCare from "./pages/shoe-care";
import Privacy from "./pages/privacy";
import StoreLocations from "./pages/storeLocations";
import About from "./pages/about";
import Contact from "./pages/contact";
import Accessories from "./pages/accessories";
import ProductDetails from "./components/ProductDetails";
import { fetchMensShoes } from "./api/fetchMensShoes";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
		};
	}

	componentDidMount() {
		fetchMensShoes().then((data) => {
			this.setState({ data });
		});
	}

	render() {
		return (
			<div className='App'>
				<Switch>
					{/* <Route exact path='/' component={Home} /> */}
					<Route exact path='/'>
						<Home data={this.state.data} />
					</Route>

					<Route exact path='/womens-shoes' component={WomensShoes} />
					<Route
						exact
						path='/mens-shoes'
						render={(props) => <MensShoes data={this.state.data} />}
					/>

					<Route exact path='/accessories' component={Accessories} />
					<Route exact path='/delivery-info' component={Delivery} />
					<Route exact path='/returns-info' component={Returns} />
					<Route exact path='/shoe-care' component={ShoeCare} />
					<Route exact path='/cookies' component={Privacy} />
					<Route exact path='/store-information' component={StoreLocations} />
					<Route exact path='/about-us' component={About} />
					<Route exact path='/contact' component={Contact} />

					<Route
						exact
						path='/mens-shoes/product/:name'
						render={(props) => {
							return <ProductDetails data={this.state.data} />;
						}}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
