import {Stremeable} from './interfaz';
/**
 * Clase abstracta padre de todas nuestras colecciones.
 * @item : Vector de items que en nuestro caso serán Series, películas o documentales.
 * @method addItem : Añade un item a nuestra colacción.
 * @method getItemByName : Nos devuelve los items que encuentra por su nombre dentro de nuestra colección. En caso de que no se encuentre nos avisa por consola y retorna undefined.
 * @method getItemByYear : Nos devuelve los items que encuentra por su año de salida dentro de nuestra colección. En caso de que no se encuentre nos avisa por consola y retorna undefined.
 * @method getNumberOfItems : Nos devuelve el número de items que tiene nuestra colección.
 */
export abstract class BasicStremeableCollection<T> implements Stremeable<T> {
    constructor(item: T[]) {
    }
    abstract addItem(newItem: T): void;
    abstract getItemByName(name: string): T[] | undefined;
    abstract getItemByYear(year: number): T[] | undefined;
    abstract getNumberOfItems(): number;
}
