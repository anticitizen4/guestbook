const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
	"mongodb://localhost/guestbook",
	{ useNewUrlParser: true }
);

const entrySchema = new mongoose.Schema({
	author: String,
	text: String,
});
const Entry = mongoose.model("entry", entrySchema);

app.use(
	"/api",

	(req, res, next) => {
		res.setHeader("access-control-allow-origin", "http://localhost:3000");
		res.setHeader("access-control-allow-headers", "content-type");
		next();
	}
);

app.get(
	"/api/getAll",

	async (req, res) => {
		const entries = await Entry.find();
		res.json(entries);
	}
);

app.post(
	"/api/add",

	bodyParser.json(),

	async (req, res) => {
		const entry = new Entry({
			author: req.body.author,
			text: req.body.text,
		});
		const result = await entry.save();
		res.send(result);
	}
);

app.post(
	"/api/deleteAll",

	async (req, res) => {
		const result = await Entry.deleteMany();
		res.send(result);
	}
);

app.listen(5000);
