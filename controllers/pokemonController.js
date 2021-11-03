import fs from 'fs'

let rawdata = fs.readFileSync('./data/data.json')
let pokemonData = JSON.parse(rawdata)

export const getPokemons = (req, res) => {
  res.json(pokemonData)
}

export const getPokemon = (req, res) => {
  let { id } = req.params
  let pokemon = pokemonData.find((pokemon) => pokemon.id === parseInt(id))
  res.json(pokemon)
}

export const getPokemonInfo = (req, res) => {
  let { id, info } = req.params
  let pokemon = pokemonData.find((pokemon) => pokemon.id === parseInt(id))
  res.json(pokemon[info])
}
