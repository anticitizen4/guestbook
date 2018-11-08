const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let id = 0000;
const entries = [
	{
		id: id++,
		author: "Mike",
		text: `${"AAAA ".repeat(20)}AAAA`,
	},
	{
		id: id++,
		author: "Tyrell",
		text: `${"BBBB ".repeat(20)}BBBB`,
	},
	{
		id: id++,
		author: "Tyrone",
		text: `${"CCCC ".repeat(20)}CCCC`,
	},
	{
		id: id++,
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

app.post(
	"/api/newEntry",

	bodyParser.urlencoded({ extended: true }),

	(req, res, next) => {
		const newEntry = {
			id: id++,
			author: req.body.author,
			text: req.body.text,
		};
		entries.push(newEntry);

		res.status(200).send();
		next();
	}
);

app.listen(5000);
