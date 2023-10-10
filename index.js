const express = require("express");
// import local phones json data
const phones = require("./phones.json");
// Import CORS to share data beteween same port
const cors = require("cors");
const app = express();
const port = 5000;

// app ke cors use korar permission deya holo
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello from my phonesssssssss serverrrr");
});

// Send all phones data
app.get("/phones", (req, res) => {
	res.send(phones);
});

// Send single phone data

app.get("/phones/:id", (req, res) => {
	// Get id from user side thats mean from requeest (req.params)
	const id = parseInt(req.params.id); // *** req.params.id *** eto tuku jeta return kore seta string, kintu phone er id gulo number format a ace. Tai etake parseInt kore niye number a convert korte hobe

	// id diye single phone take ber korte hobe
	const singlePhone = phones?.find(phone => phone.id === id) || {}; // flase hole {} object dekha jabe

	// Single phone er data ke eibar response akare send kore dite hobe user er kace
	res.send(singlePhone);
});

app.listen(port, () => {
	console.log(`My phone server is listening on port ${port}`);
});
