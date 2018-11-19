const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const mongoUrl = "mongodb://localhost/guestbook";
mongoose
	.connect(
		mongoUrl,
		{ useNewUrlParser: true }
	)
	.then(res => {
		console.log("connected");
		// console.log(res);
	})
	.catch(err => {
		console.log("connection error");
		// console.log(err);
	});

const entrySchema = new mongoose.Schema({
	author: String,
	text: String,
});
const Entry = mongoose.model("entry", entrySchema);

app.use(
	"/api",

	(req, res, next) => {
		res.setHeader("access-control-allow-origin", "*");
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

app.get(["/", "/submit", "/delete"], (req, res, next) => {
	res.sendFile(path.resolve(__dirname, "client/index.html"));
});

app.use((req, res, next) => {
	res.redirect("/");
});

app.listen(process.env.PORT || 5000);
console.log(`listening on port ${process.env.PORT}`);
