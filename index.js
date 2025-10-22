import express, { json } from 'express'
import { corsMiddleware } from './middlewares/cors.js'
import cookieParser from 'cookie-parser'
import 'dotenv/config'
import { pokemonesRoutes } from './routes/pokemones.js'

const PORT = process.env.PORT ?? 5000

const app = express()
app.use(json())
app.use(cookieParser())
app.use(corsMiddleware())

app.disable('x-powered-by')
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.redirect('https://anvicaccesorios.com')
})

app.use('/pokemones-api', pokemonesRoutes)


app.listen(PORT, () => {
  console.log(`Aplicacion corriendo en el puerto http://localhost:${PORT}`)
})
