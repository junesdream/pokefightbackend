import express from 'express'
import cors from 'cors'

import pokemonRouter from './routes/pokemonRouter.js'

const app = express()
const port = 8080

app.use(cors())
app.use('/pokemon', pokemonRouter)

app.get('/', (req, res) => {
  res.send('PokeFight API v1.1')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
