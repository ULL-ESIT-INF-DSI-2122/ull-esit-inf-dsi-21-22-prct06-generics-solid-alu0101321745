/**
 * Clase para representar las peliculas que añadiremos a nuestra colección.
 * @name : Nombre de la pelicula.
 * @year : Año de publicación.
 * @duration : Número de minutos que dura la pelicula.
 */
 export class Pelicula {
    constructor(public name: string, public year: number, public duration: number) {
    }
}
