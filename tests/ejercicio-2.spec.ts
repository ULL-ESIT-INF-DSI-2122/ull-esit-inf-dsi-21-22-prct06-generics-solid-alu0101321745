import 'mocha';
import {expect} from 'chai';
import {BasicStremeableCollection} from '../src/ejercicio-2/basicStremeable';
import {Documental} from '../src/ejercicio-2/documental';
import {Documentales} from '../src/ejercicio-2/documentales';
import {Pelicula} from '../src/ejercicio-2/pelicula';
import {Peliculas} from '../src/ejercicio-2/peliculas';
import {Serie} from '../src/ejercicio-2/serie';
import {Series} from '../src/ejercicio-2/series';

describe('Pruebas del ejercicio 2', () => {
    const serie1 = new Serie('serie1', 1, 12);
    const serie2 = new Serie('serie2', 1, 12);
    const serie3 = new Serie('serie3', 2, 12);

    const pelicula1 = new Pelicula('pelicula1', 1, 120);
    const pelicula2 = new Pelicula('pelicula2', 2, 120);
    const pelicula3 = new Pelicula('pelicula3', 3, 120);

    const documental1 = new Documental('documental1', 1, 240);
    const documental2 = new Documental('documental1', 2, 240);
    const documental3 = new Documental('documental3', 3, 240);

    const series = new Series([serie1, serie2]);

    const peliculas = new Peliculas([pelicula1, pelicula2]);

    const documentales = new Documentales([documental1, documental2]);

    describe('Pruebas de la clase basic Stremeable Collection:', () => {
        it('Peliculas, series y documentales son instancias de la clase BasicStremeableCollection:', () => {
            expect(series).be.instanceOf(BasicStremeableCollection);
            expect(peliculas).be.instanceOf(BasicStremeableCollection);
            expect(documentales).be.instanceOf(BasicStremeableCollection);
        });
    });
    describe('Pruebas de la clase Serie:', () => {
        it('Las series del 1 - 3 deben ser instancias de Serie:', () => {
            expect(serie1).be.instanceOf(Serie);
            expect(serie2).be.instanceOf(Serie);
            expect(serie3).be.instanceOf(Serie);
        });
        it('Atributos de una serie:', () => {
            expect(serie1.name).to.be.eql('serie1');
            expect(serie1.year).to.be.eql(1);
            expect(serie1.numberChapters).to.be.eql(12);
        });
    });
    describe('Pruebas de la clase Pelicula:', () => {
        it('Las peliculas del 1 - 3 deben ser instancias de Pelicula:', () => {
            expect(pelicula1).be.instanceOf(Pelicula);
            expect(pelicula2).be.instanceOf(Pelicula);
            expect(pelicula3).be.instanceOf(Pelicula);
        });
        it('Atributos de una pelicula:', () => {
            expect(pelicula1.name).to.be.eql('pelicula1');
            expect(pelicula1.year).to.be.eql(1);
            expect(pelicula1.duration).to.be.eql(120);
        });
    });
    describe('Pruebas de la clase Documental:', () => {
        it('Los documentales del 1 - 3 deben ser instancias de Documental:', () => {
            expect(documental1).be.instanceOf(Documental);
            expect(documental2).be.instanceOf(Documental);
            expect(documental3).be.instanceOf(Documental);
        });
        it('Atributos de un documental:', () => {
            expect(documental1.name).to.be.eql('documental1');
            expect(documental1.year).to.be.eql(1);
            expect(documental1.duration).to.be.eql(240);
        });
    });
    describe('Pruebas de la clase que contiene una colección de series (Series):', () => {
        it('La clase contiene un vector donde cada posición almacena una serie:', () => {
            expect(series.seriesCollection).to.not.be.eql(undefined);
        });
        it('La clase contiene un método para añadir series:', () => {
            expect(series.addItem(serie3)).to.be.eql(undefined);
        });
        it('La clase contiene un método para buscar series por el nombre:', () => {
            expect(series.getItemByName('serie3')).to.be.eql([serie3]);
            expect(series.getItemByName('serie4')).to.be.eql(undefined);
        });
        it('La clase contiene un método para buscar series por el año:', () => {
            expect(series.getItemByYear(1)).to.be.eql([serie1, serie2]);
            expect(series.getItemByYear(5)).to.be.eql(undefined);
        });
        it('La clase contiene un método para saber el número de series en la colección:', () => {
            expect(series.getNumberOfItems()).to.be.eql(3);
        });
    });
    describe('Pruebas de la clase que contiene una colección de peliculas (Peliculas):', () => {
        it('La clase contiene un vector donde cada posición almacena una pelicula:', () => {
            expect(peliculas.movieCollections).to.not.be.eql(undefined);
        });
        it('La clase contiene un método para añadir peliculas:', () => {
            expect(peliculas.addItem(pelicula3)).to.be.eql(undefined);
        });
        it('La clase contiene un método para buscar peliculas por el nombre:', () => {
            expect(peliculas.getItemByName('pelicula3')).to.be.eql([pelicula3]);
            expect(peliculas.getItemByName('pelicula')).to.be.eql(undefined);
        });
        it('La clase contiene un método para buscar peliculas por el año:', () => {
            expect(peliculas.getItemByYear(1)).to.be.eql([pelicula1]);
            expect(peliculas.getItemByYear(5)).to.be.eql(undefined);
        });
        it('La clase contiene un método para saber el número de peliculas en la colección:', () => {
            expect(peliculas.getNumberOfItems()).to.be.eql(3);
        });
    });
    describe('Pruebas de la clase que contiene una colección de documentales (Documentales):', () => {
        it('La clase contiene un vector donde cada posición almacena un documental:', () => {
            expect(documentales.documentalCollection).to.not.be.eql(undefined);
        });
        it('La clase contiene un método para añadir documentales:', () => {
            expect(documentales.addItem(documental3)).to.be.eql(undefined);
        });
        it('La clase contiene un método para buscar documentales por el nombre:', () => {
            expect(documentales.getItemByName('documental1')).to.be.eql([documental1, documental2]);
            expect(documentales.getItemByName('documental')).to.be.eql(undefined);
        });
        it('La clase contiene un método para buscar documentales por el año:', () => {
            expect(documentales.getItemByYear(1)).to.be.eql([documental1]);
            expect(documentales.getItemByYear(5)).to.be.eql(undefined);
        });
        it('La clase contiene un método para saber el número de documentales en la colección:', () => {
            expect(documentales.getNumberOfItems()).to.be.eql(3);
        });
    });
});
