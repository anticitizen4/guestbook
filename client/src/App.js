import React, { Component } from "react";
import { Menu, Button } from "semantic-ui-react";
import { Route, Link } from "react-router-dom";

import Reviews from "./Reviews";
import Submit from "./Submit";

import "./main.scss";

class App extends Component {
	handleDelete() {
		fetch("http://localhost:5000/api/delete", { method: "POST" }).then(
			res => console.log(res.status)
		);
	}
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
					<Button
						onClick={this.handleDelete}
						content="delete all reviews"
					/>
				</Menu>
				<Route exact path="/" component={Reviews} />
				<Route exact path="/submit" component={Submit} />
			</div>
		);
	}
}

export default App;
