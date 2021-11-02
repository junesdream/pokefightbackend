import express from "express";
import data from "./data.json";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/pokemon", (req, res) => {
	res.json(data);
});

app.get("/pokemon/:id", (req, res) => {
	const { id } = req.params;
	const pokemonArray = Object.entries(data);
	const filteredPokemon = pokemonArray.filter((pokemon) =>
	pokemon[1].id === parseInt(id)
	);
	res.json(filteredPokemon[0][1]);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
