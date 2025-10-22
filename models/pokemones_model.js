import pool from './connection_dabase.js'
import bcrypt from 'bcrypt'

export class pokemonesModel {
  
  static async addPokemon(nombre, raza, tipo) {
    try {
      const [result] = await pool.query(
        `INSERT INTO pokemones (nombre, raza, tipo) VALUES (?, ?, ?)`,
        [nombre, raza, tipo]
      );

      return {
        success: true,
        message: 'Pokémon agregado correctamente',
        id: result.insertId,
      };
    } catch (error) {
      console.error('Error en addPokemon:', error);
      return { success: false, message: 'Error al agregar el Pokémon' };
    }
  }

  static async getPokemones (){
    return pool.query(`select id , nombre , raza , tipo , fecha_registro from pokemones `)
    .then(([result])=>{return result})
    .catch((error)=>{return error})
  }

}
