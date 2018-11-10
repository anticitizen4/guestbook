import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { Message } from "semantic-ui-react";

import MainMenu from "./components/Menu";
import Reviews from "./components/Reviews";
import Submit from "./components/Submit";
import Delete from "./components/Delete";

import "./app.scss";

class App extends Component {
	constructor() {
		super();

		this.state = {
			message: {
				active: false,
				text: "",
			},
		};
	}

	componentDidMount() {
		this.unlisten = this.props.history.listen(_ => {
			console.log("[history event]");
			this.state.message.active && this.hideMessage();
		});
	}

	componentWillUnmount() {
		this.unlisten();
	}

	displayMessage = (text = "success", duration = 3000) => {
		if (this.state.message.active) {
			clearTimeout(this.timerID);

			this.hideMessage();
			setTimeout(_ => this.displayMessage(text), 200);

			return;
		}

		this.setState(
			{
				message: {
					active: true,
					text,
				},
			},
			_ => (this.timerID = setTimeout(this.hideMessage, duration))
		);
	};

	hideMessage = _ => {
		console.log("[hide message]");

		this.setState({
			message: {
				active: false,
				text: "",
			},
		});
	};

	render() {
		const { active, text } = this.state.message;

		return (
			<div className="container">
				<MainMenu />

				<Message hidden={!active} content={text} />

				<Route
					exact
					path="/"
					render={props => (
						<Reviews
							{...props}
							displayMessage={this.displayMessage}
						/>
					)}
				/>
				<Route
					exact
					path="/submit"
					render={props => (
						<Submit
							{...props}
							displayMessage={this.displayMessage}
						/>
					)}
				/>
				<Route
					exact
					path="/delete"
					render={props => (
						<Delete
							{...props}
							displayMessage={this.displayMessage}
						/>
					)}
				/>
			</div>
		);
	}
}

export default withRouter(App);
