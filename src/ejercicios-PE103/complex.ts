import {Arithmeticable} from './interfaz';
/**
 * Clase para representar numeros complejos.
 */
export class Complex implements Arithmeticable<Complex> {
    constructor(public a: number, public b: number) {}
    print() {
        console.log(`${this.a} + ${this.b}i`);
    }
    add(num: Complex): Complex {
        const aux = new Complex(num.a + this.a, num.b + this.b);
        return aux;
    }
    sub(num: Complex): Complex {
        const aux = new Complex(this.a - num.a, this.b - num.b);
        return aux;
    }
    multiply(num: Complex): Complex {
        const aux = new Complex((num.a * this.a) - (num.b * this.b), (this.a * num.b ) + (this.b * num.a));
        return aux;
    }
    divide(num: Complex): Complex {
        const aux = new Complex(((num.a * this.a) + (num.b * this.b)) / ((num.a**2) + (num.b**2)), ((this.b * num.a) - (this.a * num.b )) / ((num.a**2) + (num.b**2)));
        return aux;
    }
}
