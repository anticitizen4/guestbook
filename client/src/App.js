import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Route, NavLink } from "react-router-dom";

import Reviews from "./Reviews";
import Submit from "./Submit";
import Delete from "./Delete";

import "./main.scss";

class App extends Component {
	render() {
		return (
			<div className="container">
				<Menu>
					<Menu.Item
						as={NavLink}
						to="/"
						exact
						activeClassName="active"
						content="reviews"
					/>
					<Menu.Item
						as={NavLink}
						to="/submit"
						exact
						activeClassName="active"
						content="submit new review"
					/>
					<Menu.Item
						as={NavLink}
						to="/delete"
						exact
						activeClassName="active"
						content="delete reviews"
					/>
				</Menu>

				<Route exact path="/" component={Reviews} />
				<Route exact path="/submit" component={Submit} />
				<Route exact path="/delete" component={Delete} />
			</div>
		);
	}
}

export default App;
