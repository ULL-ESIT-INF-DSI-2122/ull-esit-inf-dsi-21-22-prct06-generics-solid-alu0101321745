/**
 * Clase para representar las series que añadiremos a nuestra colección.
 * @name : Nombre de la serie.
 * @year : Año de publicación.
 * @numberChapters : Número de capítulos de la serie.
 */
export class Serie {
    constructor(public name: string, public year: number, public numberChapters: number) {
    }
}
