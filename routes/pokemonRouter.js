import express from 'express'
import {
  getPokemons,
  getPokemon,
  getPokemonInfo,
} from '../controllers/pokemonController.js'
// import { checkIfPokemonExists } from "../middleware/checkIfPokemonExists.js";

const router = express.Router()

router.get('/', getPokemons)

router.get('/:id', getPokemon)

// Create a GET route on /pokemon/:id/:info (<name>|<type>|<base>)
router.get('/:id/:info', getPokemonInfo)

export default router
