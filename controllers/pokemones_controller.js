import { pokemonesModel } from '../models/pokemones_model.js'
// Este controlador maneja la entrada de petciones de los pokemones basados en exportar la clase padre y sus funciones asincronicas 

export class pokemonesController {

    static async getPokemones(req,res){
        try {
            const response = await pokemonesModel.getPokemones()
            return res.json(response)
        } catch (error) {
            return res.json(error)
        }
    }
  

}

