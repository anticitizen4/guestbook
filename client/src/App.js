import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Route, Link } from "react-router-dom";

import Reviews from "./Reviews";
import Submit from "./Submit";

import "./main.scss";

class App extends Component {
	render() {
		return (
			<div className="container">
				<Menu>
					<Menu.Item>
						<Link to="/">reviews</Link>
					</Menu.Item>
					<Menu.Item>
						<Link to="/submit">submit new review</Link>
					</Menu.Item>
				</Menu>
				<Route exact path="/" component={Reviews} />
				<Route exact path="/submit" component={Submit} />
			</div>
		);
	}
}

export default App;
