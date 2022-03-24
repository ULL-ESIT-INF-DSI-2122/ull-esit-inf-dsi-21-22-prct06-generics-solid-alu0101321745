import {Arithmeticable} from './interfaz';
/**
 * Clase para coleccionar los distintos tipos de numeros aritméticos.
 */
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
    constructor(public collection: T[]) {
    }
    addArithmeticable(newElement: T): void {
        this.collection.push(newElement);
    }
    getArithmeticable(arithmeticable: T): T[] | undefined {
        const aux = this.collection.slice();
        const result: T[] = [];
        if (aux.find((element) => element == arithmeticable) != undefined) {
            while (aux.find((element) => element == arithmeticable) != undefined) {
                result.push(aux.find((element) => element == arithmeticable) as T);
                aux.splice(aux.findIndex((element) => element == arithmeticable), 1);
            }
            return result;
        } else {
            console.log(`${arithmeticable}} is not in the collection.`);
            return undefined;
         }
    }
    getNumberOfArithmeticables(): number {
        return this.collection.length;
    }
}
