import {Fighter} from './fighter';

/**
 * Clase que representa a los luchadores del universo Marvel.
 * Solo necesita los atributos mínimos de la clase Fighter.
 */
export class Marvel extends Fighter {
    constructor(public nombre: string, public ataque: number, public defensa: number, public vida: number) {
        super(nombre, ataque, defensa, vida);
    }
    printCaption() {
        const caption: number = Math.floor(Math.random() * 3);
        switch (caption) {
            case 0:
                console.log('Dormammu, he venido a negociar.');
                break;
            case 1:
                console.log('¿Has oído hablar de la iniciativa vengadores?.');
                break;
            case 2:
                console.log('Por la izquierda.');
                break;
        }
    }
}
