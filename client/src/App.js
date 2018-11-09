import React, { Component } from "react";
import { Route } from "react-router-dom";

import MainMenu from "./Menu";
import Reviews from "./Reviews";
import Submit from "./Submit";
import Delete from "./Delete";

import "./main.scss";

class App extends Component {
	render() {
		return (
			<div className="container">
				<MainMenu />

				<Route exact path="/" component={Reviews} />
				<Route exact path="/submit" component={Submit} />
				<Route exact path="/delete" component={Delete} />
			</div>
		);
	}
}

export default App;
