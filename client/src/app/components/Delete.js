import React, { Component } from "react";
import { Segment, Button } from "semantic-ui-react";
import api from "../api/api";

class Delete extends Component {
	handleDelete = _ => {
		api.deleteAll().then(res => this.props.displayMessage(res.status));
	};

	render() {
		return (
			<Segment>
				<Button
					onClick={this.handleDelete}
					content="delete all reviews"
					basic
					compact
				/>
			</Segment>
		);
	}
}

export default Delete;
