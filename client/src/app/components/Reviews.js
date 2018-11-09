import React, { Component } from "react";
import { Segment, Header } from "semantic-ui-react";
import api from "../api/api";

class Reviews extends Component {
	constructor() {
		super();
		this.state = {
			entries: [],
		};
	}

	componentDidMount() {
		api.getAll().then(entries => this.setState({ entries }));
	}

	render() {
		const { entries } = this.state;

		return (
			<>
				{entries.map(({ _id: id, author, text }) => {
					return (
						<Segment key={id}>
							{author && <Header as="h4">{author}</Header>}
							<p>{text}</p>
						</Segment>
					);
				})}
			</>
		);
	}
}

export default Reviews;
