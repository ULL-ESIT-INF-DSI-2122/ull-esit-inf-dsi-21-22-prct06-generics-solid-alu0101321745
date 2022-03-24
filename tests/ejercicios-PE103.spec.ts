import 'mocha';
import {expect} from 'chai';
import {Arithmeticable} from '../src/ejercicios-PE103/interfaz';
import {ArithmeticableCollection} from '../src/ejercicios-PE103/colecctions';
import {Rational} from '../src/ejercicios-PE103/rational';
import {Complex} from '../src/ejercicios-PE103/complex';

describe('Pruebas de los ejercicios del PE 103:', () => {
    const complejo1 = new Complex(1, 1);
    const complejo2 = new Complex(1, 2);

    const rational1 = new Rational(1, 2);
    const rational2 = new Rational(1, 3);
    const rational3 = new Rational(1, 9);

    const collection = new ArithmeticableCollection([complejo1, rational1, rational3]);

    describe('Pruebas de la clase Complejos:', () => {
        it('Pruebas de que existen los atributos de la clase complejos:', () => {
            expect(complejo1.a).to.be.eql(1);
            expect(complejo1.b).not.to.be.eql(2);
        });
        it('Pruebas de los metodos:', () => {
            expect(complejo1.add(complejo2)).not.to.be.eql(undefined);
            expect(complejo1.sub(complejo2)).not.to.be.eql(undefined);
            expect(complejo1.multiply(complejo2)).not.to.be.eql(undefined);
            expect(complejo1.divide(complejo2)).not.to.be.eql(undefined);
            expect(complejo1.print()).to.be.eql(undefined);
        });
    });
    describe('Pruebas de la clase Rational:', () => {
        it('Pruebas de que existen los atributos de la clase rational:', () => {
            expect(rational1.a).to.be.eql(1);
            expect(rational1.b).to.be.eql(2);
        });
        it('Pruebas de los metodos:', () => {
            expect(rational1.add(rational2)).not.to.be.eql(undefined);
            expect(rational1.sub(rational2)).not.to.be.eql(undefined);
            expect(rational1.multiply(rational2)).not.to.be.eql(undefined);
            expect(rational1.divide(rational2)).not.to.be.eql(undefined);
            expect(rational1.print()).to.be.eql(undefined);
        });
    });
    describe('Pruebas de la clase Arithmeticable collection:', () => {
        it('Pruebas de que existen los atributos de la clase collection:', () => {
            expect(collection.collection).not.to.be.eql(undefined);
        });
        it('Pruebas de los metodos:', () => {
            expect(collection.addArithmeticable(rational2)).to.be.eql(undefined);
            expect(collection.getArithmeticable(complejo2)).to.be.eql(undefined);
            expect(collection.getArithmeticable(rational3)).to.be.eql([rational3]);
            expect(collection.getNumberOfArithmeticables()).to.be.eql(4);
        });
    });
});
