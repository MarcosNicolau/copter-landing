const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser({ extended: true }));

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "build")));
}
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/get-chart-data", async (req, res) => {
	const { crypto, timestamp } = req.body;
	const endpoint = `https://api.nomics.com/v1/currencies/sparkline?key=bf9f0c31c249c5c9e54460e195c82482&ids=${crypto}&start=${timestamp}T00%3A00%3A00Z`;
	const data = await fetch(endpoint, { method: "GET" });
	const parsedData = await data.json();
	res.send(parsedData);
});

app.listen(PORT);
