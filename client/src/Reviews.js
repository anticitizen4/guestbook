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
		console.log(entries);

		return (
			<>
				{entries.map(entry => {
					return (
						<Segment key={entry.id}>
							<Header as="h4">{entry.author}</Header>
							<p>{entry.text}</p>
						</Segment>
					);
				})}
			</>
		);
	}
}

export default Reviews;
