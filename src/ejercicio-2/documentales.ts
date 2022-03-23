import {Documental} from './documental';
import {BasicStremeableCollection} from './basicStremeable';
/**
 * Clase que contiene la colección de documentales.
 * @documentalCollection : Array que contiene nuestros documentales en cada posición.
 * El resto de métodos puede encontrarlos definidos en la clase abstracta genérica BasicStremeableCollection<T>.
 */
export class Documentales extends BasicStremeableCollection<Documental> {
    constructor(public documentalCollection: Documental[]) {
        super(documentalCollection);
    }
    addItem(newItem: Documental): void {
        this.documentalCollection.push(newItem);
        console.log(`${newItem.name} added to colecction.`);
    }
    getItemByName(name: string): Documental[] | undefined {
        const aux = this.documentalCollection.slice();
        const result: Documental[] = [];
        if (aux.find((element) => element.name == name) != undefined) {
            while (aux.find((element) => element.name == name) != undefined) {
                result.push(aux.find((element) => element.name == name) as Documental);
                aux.splice(aux.findIndex((element) => element.name == name), 1);
            }
            return result;
        } else {
            console.log(`${name} is not in the collection.`);
            return undefined;
         }
    }
    getItemByYear(year: number): Documental[] | undefined {
        const aux = this.documentalCollection.slice();
        const result: Documental[] = [];
        if (aux.find((element) => element.year == year) != undefined) {
            while (aux.find((element) => element.year == year) != undefined) {
                result.push(aux.find((element) => element.year == year) as Documental);
                aux.splice(aux.findIndex((element) => element.year == year), 1);
            }
            return result;
        } else {
            console.log(`There is no documentary premier at year ${year}`);
            return undefined;
        }
    }
    getNumberOfItems(): number {
        return this.documentalCollection.length;
    }
}
