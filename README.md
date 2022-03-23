# **Práctica 6: Clases e interfaces genéricas.**

## **Algunas tareas previas:**

> [Repositorio](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101321745)

> Uso de Instanbul y Coveralls.

> Comunicación por medio de issues de Github.

***Principios SOLID:***

1. Principio de responsabilidad única: Una clase debería tener una y solo una razón para cambiar.

2. Principio abierto / cerrado: Deberías ser capaz de extender el comportamiento de una clase, sin modificarla

3. Principio de Sustitución de Liskov: las clases derivadas deben poder sustituirse por sus clases base.

4. Principio de Segregación de la Interfaz: Haz interfaces que sean específicas para un tipo de cliente.

5. Principio de Inversión de Dependencias: Depende de abstracciones, no de clases concretas.

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101321745/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101321745?branch=main)

## **Ejercicio 1 - El combate definitivo.**

Lo primero que haremos es una clase abstracta Figther que contendrá los requisitos mínimos de cada universo, esto será:

> Un constructor con la información mínima a contener (nombre, ataque, defensa y vida.)

> Una funcion que selecciona caption phrases del universo y las imprime aleatoriamente, en nuestro caso definimos 3 pero podriamos definir más de ser necesario.

```ts
export abstract class Fighter {
    constructor(public nombre: string, public ataque: number, public defensa: number, public vida: number) {
    }
    abstract printCaption(): void;
}
```

Luego definiremos 3 distintos universos, pokemon, marvel y dc. Lo único relevante a mencionar acerca de de estos es que en pokemon tendremos el atibuto `tipo` a diferencia de en los demás.

**Pokemon:**

```ts
export class Pokemon extends Fighter {
    constructor(public nombre: string, public ataque: number, public defensa: number, public vida: number, public tipo: string) {
        super(nombre, ataque, defensa, vida);
    }
    printCaption() {
        const caption: number = Math.floor(Math.random() * 3);
        switch (caption) {
            case 0:
                console.log('No hay nada más fuerte que una amistad forjada en batalla.');
                break;
            case 1:
                console.log('Al que madruga Dios lo ayuda, o en este caso, consigue un Pokémon.');
                break;
            case 2:
                console.log('A veces miro la cara de ese psyduck y me duele la cabeza.');
                break;
        }
    }
}
```

**Marvel:**

```ts
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
```

**DC:**

```ts
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
```

Lo siguiente que tenemos que plantear es la clase Pokedex, esta almacenará tantos luchadores como queramos por lo que hacemos un vector de luchadores y para visualizar lo que contiene definimos un metodo `print()`:

**Pokedex**:

```ts
export class Pokedex {
    constructor(public pokedex: Fighter[]) {
    }
    print(): void {
        let count = 1;
        console.log('Actualmente estan los siguientes personajes en la pokedex: ');
        this.pokedex.forEach((element) => {
            console.log(`${count}: ${element.nombre}`);
            count += 1;
        });
    }
}
```

Por último, quedaría plantear la clase combate, que coincidirá casi todo con la planteada en la prácica anterior teniendo las siguientes consideraciones:

> La clase recibirá dos luchadores.
> El método getDamage() tendrá distintas consideraciones, si ambos luchadores son pokemons entonces será igual que el anterior, en otro caso, la efectividad dependerá del tipo de instancia del luchador 1.
> Después de cada ataque se llama al método del propio luchador que imprime un caption phrase del universo.

**Combat:**
```ts
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
                  if (figther2.tipo == 'fire') {
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
```

### **Pruebas:**

```ts
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
```

## **Ejercicio 2 - DSIflix **

Para este ejercicio, creamos la siguiente interfaz genérica:

```ts
export interface Stremeable<T> {
    addItem(newItem: T): void;
    getItemByName(name: string): T[] | undefined;
    getItemByYear(year: number): T[] | undefined;
    getNumberOfItems(): number;
}
```

No hace falta separar en más interfaces pues el nombre y año son atributos de todas las colecciones y el número de items solo hace falta contar los elementos en nuestra estructura de datos correspondiente, en nuestro caso un vector.

Para realizar la colección de peliculas, series y documentales tuve que realizar clases Serie, Pelicula y Documental para luego pasarle un vector a las colleciones, dichas clases solo tienen constructores de modo que el código sería el siguiente:

**Serie:**

```ts
export class Serie {
    constructor(public name: string, public year: number, public numberChapters: number) {
    }
}
```

**Pelicula:**

```ts
 export class Pelicula {
    constructor(public name: string, public year: number, public duration: number) {
    }
}
```

**Documental:**

```ts
 export class Documental {
    constructor(public name: string, public year: number, public duration: number) {
    }
}
```

La única diferencia destacable entre ellas es la diferencia de atributos entre series y los demás en cuanto al número de capitulos y en el resto de casos la duración. Además, crearemos nuestra clase abstracta y genérica `BasicStremeableCollection<T>` que será padre de las clases Series, Peliculas y Documentales:

```ts
export abstract class BasicStremeableCollection<T> implements Stremeable<T> {
    constructor(item: T[]) {
    }
    abstract addItem(newItem: T): void;
    abstract getItemByName(name: string): T[] | undefined;
    abstract getItemByYear(year: number): T[] | undefined;
    abstract getNumberOfItems(): number;
}
```

Con toda esto ya tenemos lo necesario para poder empezar a crear nuestras colecciones mediante las siguientes clases:

1. Series: Clase que almacena objetos de tipo Serie y es hija de BasicStremeableCollection.
2. Peliculas: Clase que almacena objetos de tipo Pelicula y es hija de BasicStremeableCollection.
3. Documentales: Clase que almacena objetos de tipo Documental y es hija de BasicStremeableCollection.

Cada una de estas clases implementa los métodos de búsqueda de BasicStremeableCollection devolviendo vectores de cada tipo correspondiente por si se da el caso en que 2 peliculas y/o series y/o documentales tienen el mismo nombre o la misma fecha de estreno.

**Series:**
```ts
export class Series extends BasicStremeableCollection<Serie> {
    constructor(public seriesCollection: Serie[]) {
        super(seriesCollection);
    }
    addItem(newItem: Serie): void {
        this.seriesCollection.push(newItem);
        console.log(`${newItem.name} added to colecction.`);
    }
    getItemByName(name: string): Serie[] | undefined {
        const aux = this.seriesCollection.slice();
        const result: Serie[] = [];
        if (aux.find((element) => element.name == name) != undefined) {
            while (aux.find((element) => element.name == name) != undefined) {
                result.push(aux.find((element) => element.name == name) as Serie);
                aux.splice(aux.findIndex((element) => element.name == name), 1);
            }
            return result;
        } else {
            console.log(`${name} is not in the collection.`);
            return undefined;
         }
    }
    getItemByYear(year: number): Serie[] | undefined {
        const aux = this.seriesCollection.slice();
        const result: Serie[] = [];
        if (aux.find((element) => element.year == year) != undefined) {
            while (aux.find((element) => element.year == year) != undefined) {
                result.push(aux.find((element) => element.year == year) as Serie);
                aux.splice(aux.findIndex((element) => element.year == year), 1);
            }
            return result;
        } else {
            console.log(`There is no series premier at year ${year}`);
            return undefined;
        }
    }
    getNumberOfItems(): number {
        return this.seriesCollection.length;
    }
}
```

**Peliculas:**

```ts
export class Peliculas extends BasicStremeableCollection<Pelicula> {
    constructor(public movieCollections: Pelicula[]) {
        super(movieCollections);
    }
    addItem(newItem: Pelicula): void {
        this.movieCollections.push(newItem);
        console.log(`${newItem.name} added to colecction.`);
    }
    getItemByName(name: string): Pelicula[] | undefined {
        const aux = this.movieCollections.slice();
        const result: Pelicula[] = [];
        if (aux.find((element) => element.name == name) != undefined) {
            while (aux.find((element) => element.name == name) != undefined) {
                result.push(aux.find((element) => element.name == name) as Pelicula);
                aux.splice(aux.findIndex((element) => element.name == name), 1);
            }
            return result;
        } else {
            console.log(`${name} is not in the collection.`);
            return undefined;
         }
    }
    getItemByYear(year: number): Pelicula[] | undefined {
        const aux = this.movieCollections.slice();
        const result: Pelicula[] = [];
        if (aux.find((element) => element.year == year) != undefined) {
            while (aux.find((element) => element.year == year) != undefined) {
                result.push(aux.find((element) => element.year == year) as Pelicula);
                aux.splice(aux.findIndex((element) => element.year == year), 1);
            }
            return result;
        } else {
            console.log(`There is no movies premier at year ${year}`);
            return undefined;
        }
    }
    getNumberOfItems(): number {
        return this.movieCollections.length;
    }
}
```

**Documentales:**

```ts
export class Documentales extends BasicStremeableCollection<Documental> {
    constructor(public documentalCollection: Documental[]) {
        super(documentalCollection);
    }
    addItem(newItem: Documental): void {
        this.documentalCollection.push(newItem);
        console.log(`${newItem.name} added to colecction.`);
    }
    getItemByName(name: string): Documental[] | undefined {
        const aux = this.documentalCollection.slice();
        const result: Documental[] = [];
        if (aux.find((element) => element.name == name) != undefined) {
            while (aux.find((element) => element.name == name) != undefined) {
                result.push(aux.find((element) => element.name == name) as Documental);
                aux.splice(aux.findIndex((element) => element.name == name), 1);
            }
            return result;
        } else {
            console.log(`${name} is not in the collection.`);
            return undefined;
         }
    }
    getItemByYear(year: number): Documental[] | undefined {
        const aux = this.documentalCollection.slice();
        const result: Documental[] = [];
        if (aux.find((element) => element.year == year) != undefined) {
            while (aux.find((element) => element.year == year) != undefined) {
                result.push(aux.find((element) => element.year == year) as Documental);
                aux.splice(aux.findIndex((element) => element.year == year), 1);
            }
            return result;
        } else {
            console.log(`There is no documentary premier at year ${year}`);
            return undefined;
        }
    }
    getNumberOfItems(): number {
        return this.documentalCollection.length;
    }
}
```
### **Pruebas:**


