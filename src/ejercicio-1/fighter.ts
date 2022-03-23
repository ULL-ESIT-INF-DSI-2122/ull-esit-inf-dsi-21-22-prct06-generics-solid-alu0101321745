/**
 * Clase abstracta tipo luchador que se encargará de almacenar la información mínima necesaria para cada luchador.
 * @nombre = Variable para almacenar el nombre del luchador.
 * @ataque = Varible tipo numerica para almacenar el ataque del luchador.
 * @defensa = Variable numérica para almacenar la defensa del luchador.
 * @vida = Variable numérica para almacenar la vida del lichador.
 * @method printCaption() = Metodo abstracto que imprime una caption phrase del universo correspondiente.
 */
export abstract class Fighter {
    constructor(public nombre: string, public ataque: number, public defensa: number, public vida: number) {
    }
    abstract printCaption(): void;
}
