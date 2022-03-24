/**
 * Clase cifrado que representa instancias de cifrados indescifrables
 */
export class Cifrado {
    constructor(public alphabet: string[], public key: string) {
    }
    cifrado(mensaje: string): string {
        let resultado = '';
        for (let i = 0, j = 0; i < mensaje.length; i++, j++) {
            if (this.isInAlphabet(mensaje[i])) {
                resultado += this.alphabet[this.getIndex(mensaje[i]) + (this.getIndex(this.key[i]) + 1)];
            } else {
                resultado += mensaje[i];
            }
            if (j == this.key.length - 1) j = 0;
        }
        return resultado;
    }
    descifrado(mensaje: string): string {
      let resultado = '';
      for (let i = 0, j = 0; i < mensaje.length; i++, j++) {
          if (this.isInAlphabet(mensaje[i])) {
              resultado += this.alphabet[this.getIndex(mensaje[i]) - (this.getIndex(this.key[i]) + 1)];
          } else {
              resultado += mensaje[i];
          }
          if (j == this.key.length - 1) j = 0;
      }
      return resultado;
    }
    isInAlphabet(char: string): boolean {
        let result: boolean = false;
        this.alphabet.forEach((element) => {
            if (char == element) result = true;
        });
        return result;
    }
    getIndex(char: string): number {
        return this.alphabet.findIndex((element) => element == char);
    }
}
