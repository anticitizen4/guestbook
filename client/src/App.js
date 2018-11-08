import React, { Component } from "react";

class App extends Component {
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
			<ul>
				{entries.map(entry => {
					return <li key={entry.id}>{entry.id}</li>;
				})}
			</ul>
		);
	}
}

export default App;
