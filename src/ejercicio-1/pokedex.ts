import {Fighter} from './fighter';

/**
 * Clase pokedex que almacena todo tipo de luchadores.
 * @pokedex = Vector de luchadores donde se almacenarán todos los luchadores de los distintos universos.
 * @method print() = Imprime por consola de forma enumerada los luchadores que se encuentran en la pokedex.
 */
export class Pokedex {
    constructor(public pokedex: Fighter[]) {
    }
    print(): void {
        let count = 1;
        console.log('Actualmente estan los siguientes personajes en la pokedex: ');
        this.pokedex.forEach((element) => {
            console.log(`${count}: ${element.nombre}`);
            count += 1;
        });
    }
}
