const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
	"mongodb://localhost/guestbook",
	{ useNewUrlParser: true }
);

const entrySchema = new mongoose.Schema({
	// todo: add autoincrement id
	// id: Number,
	author: String,
	text: String,
});
const Entry = mongoose.model("entry", entrySchema);

app.use("/api", (req, res, next) => {
	res.setHeader("access-control-allow-origin", "http://localhost:3000");
	res.setHeader("access-control-allow-headers", "content-type");
	next();
});

app.get("/api/getAll", (req, res, next) => {
	Entry.find().then(entries => {
		res.json(entries);
	});
});

app.post(
	"/api/add",

	bodyParser.json(),

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

app.post(
	"/api/deleteAll",

	(req, res, next) => {
		Entry.deleteMany().then(console.log);

		res.status(200).send();
		next();
	}
);

app.listen(5000);
