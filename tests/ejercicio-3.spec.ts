import 'mocha';
import {expect} from 'chai';
import {Cifrado} from '../src/ejercicio-3/cifrado';

describe('Pruebas del ejercicio 3', () => {
    const cipher = new Cifrado(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'abc');
    describe('Pruebas de la clase Cifrado:', () => {
        it('Existen los atributos de la clase cifrado:', () => {
            expect(cipher.alphabet).not.to.be.eql(undefined);
            expect(cipher.key).not.to.be.eql(undefined);
        });
        it('Podemos cifrar mensajes:', () => {
            expect(cipher.cifrado('abc')).to.be.eql('bdf');
            expect(cipher.cifrado('abh')).to.be.eql('bdh');
        });
        it('Podemos desccifrar mensajes:', () => {
            expect(cipher.descifrado('bdf')).to.be.eql('abc');
            expect(cipher.descifrado('bdh')).to.be.eql('abh');
        });
    });
});
