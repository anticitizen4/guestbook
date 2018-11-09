import React, { Component } from "react";
import { Route } from "react-router-dom";

import MainMenu from "./components/Menu";
import Reviews from "./components/Reviews";
import Submit from "./components/Submit";
import Delete from "./components/Delete";

import "./app.scss";

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
