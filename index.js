const express = require("express");
const app = express();

const entries = [
	{
		id: 0000,
		author: "Mike",
		text: `${"AAAA ".repeat(20)}AAAA`,
	},
	{
		id: 0001,
		author: "Tyrell",
		text: `${"BBBB ".repeat(20)}BBBB`,
	},
	{
		id: 0002,
		author: "Tyrone",
		text: `${"CCCC ".repeat(20)}CCCC`,
	},
	{
		id: 0003,
		author: "Tyson",
		text: `${"DDDD ".repeat(20)}DDDD`,
	},
];

app.use("/api", (req, res, next) => {
	res.setHeader("access-control-allow-origin", "http://localhost:3000");
	next();
});

app.get("/api/getEntries", (req, res, next) => {
	res.json(entries);
});

app.listen(5000);
