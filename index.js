const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
	"mongodb://localhost/guestbook",
	{ useNewUrlParser: true }
);
const db = mongoose.connection;

const entrySchema = new mongoose.Schema({
	// todo: add autoincrement id
	// id: Number,
	author: String,
	text: String,
});
const Entry = mongoose.model("entry", entrySchema);

app.use("/api", (req, res, next) => {
	res.setHeader("access-control-allow-origin", "http://localhost:3000");
	next();
});

app.get("/api/getEntries", (req, res, next) => {
	Entry.find().then(entries => {
		res.json(entries);
	});
});

app.post(
	"/api/newEntry",

	bodyParser.urlencoded({ extended: true }),

	(req, res, next) => {
		const entry = new Entry({
			author: req.body.author,
			text: req.body.text,
		});
		entry.save();

		res.status(200).send();
		next();
	}
);

app.listen(5000);
