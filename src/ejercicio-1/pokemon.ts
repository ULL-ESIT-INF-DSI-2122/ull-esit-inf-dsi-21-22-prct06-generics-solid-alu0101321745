import {Fighter} from './fighter';

/**
 * Clase Pokemon heredada de la clase Fighter que representa a los luchadores del universo Pokemon.
 * Los atributos son los mismos que la clase luchador añadiendo uno mas.
 * @tipo = Tipo del pokemon.
 */
export class Pokemon extends Fighter {
    constructor(public nombre: string, public ataque: number, public defensa: number, public vida: number, public tipo: string) {
        super(nombre, ataque, defensa, vida);
    }
    printCaption() {
        const caption: number = Math.floor(Math.random() * 3);
        switch (caption) {
            case 0:
                console.log('No hay nada más fuerte que una amistad forjada en batalla.');
                break;
            case 1:
                console.log('Al que madruga Dios lo ayuda, o en este caso, consigue un Pokémon.');
                break;
            case 2:
                console.log('A veces miro la cara de ese psyduck y me duele la cabeza.');
                break;
        }
    }
}
