/**
 * Clase para representar los documentales que añadiremos a nuestra colección.
 * @name : Nombre del documental.
 * @year : Año de publicación.
 * @duration : Número de minutos que dura el documental.
 */
 export class Documental {
    constructor(public name: string, public year: number, public duration: number) {
    }
}
