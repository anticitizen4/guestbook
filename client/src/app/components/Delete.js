import React, { Component } from "react";
import { Segment, Button } from "semantic-ui-react";
import api from "../api/api";

class Delete extends Component {
	handleDelete() {
		api.deleteAll();
	}

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
