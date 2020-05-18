import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/index";
import WomensShoes from "./pages/womens-shoes";
import Delivery from "./pages/delivery";
import Returns from "./pages/returns";
import ShoeCare from "./pages/shoe-care";

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/womens-shoes' component={WomensShoes} />
					<Route exact path='/delivery-info' component={Delivery} />
					<Route exact path='/returns-info' component={Returns} />
					<Route exact path='/shoe-care' component={ShoeCare} />
				</Switch>
			</div>
		);
	}
}

export default App;
