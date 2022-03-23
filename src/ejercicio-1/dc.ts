import {Fighter} from './fighter';

/**
 * Clase que representa a los luchadores del universo DC.
 * Solo necesita los atributos mínimos de un luchador.
 */
export class DC extends Fighter {
    constructor(public nombre: string, public ataque: number, public defensa: number, public vida: number) {
        super(nombre, ataque, defensa, vida);
    }
    printCaption() {
        const caption: number = Math.floor(Math.random() * 3);
        switch (caption) {
            case 0:
                console.log('Dime, ¿Sangras? Sangrarás.');
                break;
            case 1:
                console.log('La era de los héroes regresará. Tiene que hacerlo.');
                break;
            case 2:
                console.log('¡Solía pensar que la vida era una tragedia, pero ahora veo que es una comedia!');
                break;
        }
    }
}
