import React, { Component } from "react";
import { Segment, Header } from "semantic-ui-react";

class Reviews extends Component {
	constructor() {
		super();
		this.state = {
			entries: [],
		};
	}

	componentDidMount() {
		this.getEntries().then(entries => this.setState({ entries }));
	}

	async getEntries() {
		const res = await fetch("http://localhost:5000/api/getEntries");
		const data = await res.json();
		return data;
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
