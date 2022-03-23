import {Serie} from './serie';
import {BasicStremeableCollection} from './basicStremeable';
/**
 * Clase que contiene la colección de series.
 * @seriesCollection : Array que contiene nuestras series en cada posición.
 * El resto de métodos puede encontrarlos definidos en la clase abstracta genérica BasicStremeableCollection<T>.
 */
export class Series extends BasicStremeableCollection<Serie> {
    constructor(public seriesCollection: Serie[]) {
        super(seriesCollection);
    }
    addItem(newItem: Serie): void {
        this.seriesCollection.push(newItem);
        console.log(`${newItem.name} added to colecction.`);
    }
    getItemByName(name: string): Serie[] | undefined {
        const aux = this.seriesCollection.slice();
        const result: Serie[] = [];
        if (aux.find((element) => element.name == name) != undefined) {
            while (aux.find((element) => element.name == name) != undefined) {
                result.push(aux.find((element) => element.name == name) as Serie);
                aux.splice(aux.findIndex((element) => element.name == name), 1);
            }
            return result;
        } else {
            console.log(`${name} is not in the collection.`);
            return undefined;
         }
    }
    getItemByYear(year: number): Serie[] | undefined {
        const aux = this.seriesCollection.slice();
        const result: Serie[] = [];
        if (aux.find((element) => element.year == year) != undefined) {
            while (aux.find((element) => element.year == year) != undefined) {
                result.push(aux.find((element) => element.year == year) as Serie);
                aux.splice(aux.findIndex((element) => element.year == year), 1);
            }
            return result;
        } else {
            console.log(`There is no series premier at year ${year}`);
            return undefined;
        }
    }
    getNumberOfItems(): number {
        return this.seriesCollection.length;
    }
}
