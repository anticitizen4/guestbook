const api = {
	async getAll() {
		const res = await fetch("http://localhost:5000/api/getEntries");
		const data = await res.json();

		return data;
	},

	async add(data) {
		const res = await fetch(`http://localhost:5000/api/newEntry`, {
			method: "POST",
			body: data,
		});

		return res;
	},

	async deleteAll() {
		const res = await fetch("http://localhost:5000/api/delete", {
			method: "POST",
		});

		return res;
	},
};

export default api;
