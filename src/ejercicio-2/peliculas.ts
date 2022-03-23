import {Pelicula} from './pelicula';
import {BasicStremeableCollection} from './basicStremeable';
/**
 * Clase que contiene la colección de peliculas.
 * @movieCollections : Array que contiene nuestras peliculas en cada posición.
 * El resto de métodos puede encontrarlos definidos en la clase abstracta genérica BasicStremeableCollection<T>.
 */
export class Peliculas extends BasicStremeableCollection<Pelicula> {
    constructor(public movieCollections: Pelicula[]) {
        super(movieCollections);
    }
    addItem(newItem: Pelicula): void {
        this.movieCollections.push(newItem);
        console.log(`${newItem.name} added to colecction.`);
    }
    getItemByName(name: string): Pelicula[] | undefined {
        const aux = this.movieCollections.slice();
        const result: Pelicula[] = [];
        if (aux.find((element) => element.name == name) != undefined) {
            while (aux.find((element) => element.name == name) != undefined) {
                result.push(aux.find((element) => element.name == name) as Pelicula);
                aux.splice(aux.findIndex((element) => element.name == name), 1);
            }
            return result;
        } else {
            console.log(`${name} is not in the collection.`);
            return undefined;
         }
    }
    getItemByYear(year: number): Pelicula[] | undefined {
        const aux = this.movieCollections.slice();
        const result: Pelicula[] = [];
        if (aux.find((element) => element.year == year) != undefined) {
            while (aux.find((element) => element.year == year) != undefined) {
                result.push(aux.find((element) => element.year == year) as Pelicula);
                aux.splice(aux.findIndex((element) => element.year == year), 1);
            }
            return result;
        } else {
            console.log(`There is no movies premier at year ${year}`);
            return undefined;
        }
    }
    getNumberOfItems(): number {
        return this.movieCollections.length;
    }
}
