import {Arithmeticable} from './interfaz';
/**
 * Clase para representar numeros racionales.
 */
export class Rational implements Arithmeticable<Rational> {
    constructor(public a: number, public b: number) {}
    print() {
        console.log(`${this.a} / ${this.b}`);
    }
    add(num: Rational): Rational {
        const aux = new Rational((this.a * num.b) + (this.b * num.a), this.b * num.b);
        return aux;
    }
    sub(num: Rational): Rational {
        const aux = new Rational((this.a * num.b) - (this.b * num.a), this.b * num.b);
        return aux;
    }
    multiply(num: Rational): Rational {
        const aux = new Rational(num.a * this.a, this.b * num.b);
        return aux;
    }
    divide(num: Rational): Rational {
        const aux = new Rational(this.a * num.b, this.b * num.a);
        return aux;
    }
}
