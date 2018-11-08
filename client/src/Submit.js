import React, { Component } from "react";
import { Segment, TextArea, Form, Button } from "semantic-ui-react";

class Submit extends Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		entries: [],
	// 	};
	// }

	// componentDidMount() {
	// 	this.getEntries().then(entries => this.setState({ entries }));
	// }

	// async getEntries() {
	// 	const res = await fetch("http://localhost:5000/api/getEntries");
	// 	const data = await res.json();
	// 	return data;
	// }

	handleSubmit({ target }) {
		const data = new URLSearchParams(new FormData(target));
		fetch(`http://localhost:5000/api/newEntry`, {
			method: "POST",
			body: data,
		});
	}

	render() {
		return (
			<Segment>
				<Form className="new-review-form" onSubmit={this.handleSubmit}>
					<Form.Input
						name="author"
						placeholder="name (optional)"
					/>
					<Form.TextArea
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
