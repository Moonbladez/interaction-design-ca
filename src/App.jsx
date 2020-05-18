import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/index";
import WomensShoes from "./pages/womens-shoes";

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/womens-shoes' component={WomensShoes} />
				</Switch>
			</div>
		);
	}
}

export default App;
