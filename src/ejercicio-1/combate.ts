import {Fighter} from './fighter';
import {Pokemon} from './pokemon';
import {Marvel} from './marvel';
import {DC} from './dc';

/**
 * Clase que simula un combate entre 2 luchadores.
 * @fighter1 = Luchador 1.
 * @fighter2 = Luchador 2.
 * @method getDamage() = Metodo para determinar cuanto daño hara cada luchador al otro en cada turno de ataque.
 * @method start() = Metodo que da inicio al combate.
*/
export class Combat {
    constructor(public figther1: Fighter, public figther2: Fighter) {
    }

    getDamage(figther1: Fighter, figther2: Fighter): number {
        if (figther1 instanceof Pokemon && figther2 instanceof Pokemon) {
            let efectividad = 1;
            if (figther1.tipo == figther2.tipo) {
              efectividad = 0.5;
            } else {
              switch (figther1.tipo) {
                case 'fuego':
                  if (figther2.tipo == 'hierba') {
                    efectividad = 2;
                  }
                  if (figther2.tipo == 'agua') {
                    efectividad = 0.5;
                  }
                  break;
                case 'agua':
                  if (figther2.tipo == 'fuego') {
                    efectividad = 2;
                  }
                  if ((figther2.tipo == 'electricidad') || (figther2.tipo == 'hierba')) {
                    efectividad = 0.5;
                  }
                  break;
                case 'hierba':
                  if (figther2.tipo == 'agua') {
                    efectividad = 2;
                  }
                  if (figther2.tipo == 'fuego') {
                    efectividad = 0.5;
                  }
                  break;
                case 'electricidad':
                  if (figther2.tipo == 'agua') {
                    efectividad = 2;
                  }
                  break;
              }
            }
            return (50 * (figther1.ataque/figther2.defensa) * efectividad);
        } else {
            let efectividad = 5;
            if (figther1 instanceof Marvel) {
                efectividad = 2;
            } else if (figther1 instanceof DC) {
                efectividad = 4;
            }
            return 50 * (figther1.ataque/figther2.defensa) * efectividad;
        }
    }
    start() {
        console.log('Comienza el combate');
        while (this.figther2.vida > 0 && this.figther1.vida > 0) {
            console.log(`\n${this.figther1.nombre} ataca a ${this.figther2.nombre}`);
            this.figther1.printCaption();
            this.figther2.vida = this.figther2.vida - this.getDamage(this.figther1, this.figther2);
            console.log(`Vida de ${this.figther2.nombre}: ${this.figther2.vida}`);
            if (this.figther2.vida < 0) break;
            console.log(`\n${this.figther2.nombre} ataca a ${this.figther1.nombre}`);
            this.figther2.printCaption();
            this.figther1.vida = this.figther1.vida - this.getDamage(this.figther2, this.figther1);
            console.log(`Vida de ${this.figther1.nombre}: ${this.figther1.vida}`);
            if (this.figther1.vida < 0) break;
        }
        console.log('\nAcaba el combate');
        if (this.figther1.vida > 0) console.log(`Ganador: ${this.figther1.nombre}`);
        else console.log(`Ganador: ${this.figther2.nombre}`);
    }
}
