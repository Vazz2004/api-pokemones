import { Router } from 'express'
import { pokemonesController } from '../controllers/pokemones_controller.js'
export const pokemonesRoutes = Router()

//loginRoutes.get('/', LoginController.login)

pokemonesRoutes.get('/get-pokemones',pokemonesController.getPokemones)