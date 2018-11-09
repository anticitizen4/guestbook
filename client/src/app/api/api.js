const api = {
	async getAll() {
		const res = await fetch("http://localhost:5000/api/getAll");
		const data = await res.json();

		return data;
	},

	async add(data) {
		const res = await fetch("http://localhost:5000/api/add", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: data,
		});

		return res;
	},

	async deleteAll() {
		const res = await fetch("http://localhost:5000/api/deleteAll", {
			method: "POST",
		});

		return res;
	},
};

export default api;
