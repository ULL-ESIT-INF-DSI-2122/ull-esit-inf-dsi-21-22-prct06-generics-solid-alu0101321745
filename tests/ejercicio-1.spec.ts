import 'mocha';
import {expect} from 'chai';
import {Fighter} from '../src/ejercicio-1/fighter';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {Marvel} from '../src/ejercicio-1/marvel';
import {DC} from '../src/ejercicio-1/dc';
import {Pokedex} from '../src/ejercicio-1/pokedex';
import {Combat} from '../src/ejercicio-1/combate';


describe('Pruebas del ejercicio 1', () => {
    const pikachu = new Pokemon('pikachu', 100, 90, 500, 'electricidad');
    const charizard = new Pokemon('charizard', 150, 130, 600, 'fuego');
    const bulbasur = new Pokemon('bulbasur', 80, 120, 600, 'hierba');
    const blastoide = new Pokemon('blastoide', 140, 130, 500, 'agua');
    const vaporeon = new Pokemon('vaporeon', 140, 130, 500, 'agua');
    const magikarp = new Pokemon('magikarp', 50, 30, 500, 'agua');
    const rapidash = new Pokemon('rapidash', 90, 70, 500, 'fuego');

    const jolteon = new Pokemon('jolteon', 100, 90, 500, 'electricidad');
    const gyarados = new Pokemon('gyarados', 150, 80, 500, 'agua');
    const ironMan = new Marvel('iron man', 150, 180, 1500);
    const joker = new DC('joker', 200, 100, 1000);

    const pokedex = new Pokedex([pikachu, ironMan, joker]);

    const combate = new Combat(ironMan, joker);
    const combatePokemon = new Combat(pikachu, charizard);
    const combatePokemon2 = new Combat(bulbasur, blastoide);
    const combatePokemon3 = new Combat(vaporeon, magikarp);
    const combatePokemon4 = new Combat(charizard, vaporeon);
    const combatePokemon5 = new Combat(bulbasur, rapidash);
    const combatePokemon6 = new Combat(gyarados, jolteon);

    describe('Pruebas de la clase Figther', () => {
        it('Pikachu, Iron man y el Joker deben ser instancias de la clase fighter:', () => {
            expect(pikachu).be.instanceOf(Fighter);
            expect(ironMan).be.instanceOf(Fighter);
            expect(joker).be.instanceOf(Fighter);
        });
    });
    describe('Pruebas de la clase Pokemon', () => {
        it('Pikachu es una instancia de la clase Pokemon', () => {
            expect(pikachu).be.instanceOf(Pokemon);
        });
        it('Atributos de pikachu', () => {
            expect(pikachu.nombre).to.be.eql('pikachu');
            expect(pikachu.ataque).to.be.eql(100);
            expect(pikachu.defensa).to.be.eql(90);
            expect(pikachu.vida).to.be.eql(500);
            expect(pikachu.tipo).to.be.eql('electricidad');
        });
        it('Existe un método que imprime caption phrases en la clase pokemon: ', () => {
            expect(pikachu.printCaption()).to.be.eql(undefined);
        });
    });
    describe('Pruebas de la clase Marvel', () => {
        it('Iron man es una instancia de la clase Marvel', () => {
            expect(ironMan).be.instanceOf(Marvel);
        });
        it('Atributos de iron man', () => {
            expect(ironMan.nombre).to.be.eql('iron man');
            expect(ironMan.ataque).to.be.eql(150);
            expect(ironMan.defensa).to.be.eql(180);
            expect(ironMan.vida).to.be.eql(1500);
        });
        it('Existe un método que imprime caption phrases en la clase marvel: ', () => {
            expect(ironMan.printCaption()).to.be.eql(undefined);
        });
    });
    describe('Pruebas de la clase DC', () => {
        it('Joker es una instancia de la clase DC', () => {
            expect(joker).be.instanceOf(DC);
        });
        it('Atributos de joker', () => {
            expect(joker.nombre).to.be.eql('joker');
            expect(joker.ataque).to.be.eql(200);
            expect(joker.defensa).to.be.eql(100);
            expect(joker.vida).to.be.eql(1000);
        });
        it('Existe un método que imprime caption phrases en la clase dc: ', () => {
            expect(joker.printCaption()).to.be.eql(undefined);
        });
    });
    describe('Pruebas de la pokedex', () => {
        it('La pokedex es instancia de su correspondiente clase y sus atributos son instancias de Fighter.', () => {
            expect(pokedex).be.instanceOf(Pokedex);
            expect(pokedex.pokedex[0]).be.instanceOf(Fighter);
            expect(pokedex.pokedex[1]).be.instanceOf(Fighter);
            expect(pokedex.pokedex[2]).be.instanceOf(Fighter);
        });
        it('Existe un método que imprime los luchadores de la pokedex: ', () => {
            expect(pokedex.print()).to.be.eql(undefined);
        });
    });
    describe('Pruebas de la clase combate', () => {
        it('combate es una instancia de la clase Combat y sus luchadores de Fighther:', () => {
            expect(combate).be.instanceOf(Combat);
            expect(combate.figther1).be.instanceOf(Fighter);
            expect(combate.figther2).be.instanceOf(Fighter);
        });
        it('Existe un método que calcula el daño realizado al atacar: ', () => {
            expect(combate.getDamage(pikachu, ironMan).toFixed(0)).to.be.eql('139');
            expect(combate.getDamage(joker, pikachu).toFixed(0)).to.be.eql('444');
            expect(combate.getDamage(ironMan, joker).toFixed(0)).to.be.eql('150');
        });
        it('Existe un método que inicia el combate: ', () => {
            expect(combate.start()).to.be.eql(undefined);
            expect(combatePokemon.start()).to.be.eql(undefined);
            expect(combatePokemon2.start()).to.be.eql(undefined);
            expect(combatePokemon3.start()).to.be.eql(undefined);
            expect(combatePokemon4.start()).to.be.eql(undefined);
            expect(combatePokemon5.start()).to.be.eql(undefined);
            expect(combatePokemon6.start()).to.be.eql(undefined);
        });
    });
});
