import React, { Component } from "react";
import { Segment, Form } from "semantic-ui-react";
import api from "../api/api";

class Submit extends Component {
	constructor() {
		super();

		this.state = {
			author: "",
			text: "",
		};
	}

	handleChange = event => {
		const name = event.target.name;
		const val = event.target.value;
		this.setState({ [name]: val });
	};

	handleSubmit = _ => {
		const data = JSON.stringify(this.state);

		this.setState({
			author: "",
			text: "",
		});

		api.add(data);
	};

	render() {
		return (
			<Segment>
				<Form className="new-review-form" onSubmit={this.handleSubmit}>
					<Form.Input
						value={this.state.author}
						onChange={this.handleChange}
						name="author"
						placeholder="name (optional)"
					/>
					<Form.TextArea
						value={this.state.text}
						onChange={this.handleChange}
						name="text"
						autoHeight
						placeholder="enter review here..."
						rows="8"
					/>
					<Form.Button content="submit" basic />
				</Form>
			</Segment>
		);
	}
}

export default Submit;
