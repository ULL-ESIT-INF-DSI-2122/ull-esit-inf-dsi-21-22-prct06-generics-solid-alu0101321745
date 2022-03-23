/**
 * Interfaz genérica implementada por nuestra clase BasicStremeableCollection con los métodos de añadir y buscar elementos.
 */
export interface Stremeable<T> {
    addItem(newItem: T): void;
    getItemByName(name: string): T[] | undefined;
    getItemByYear(year: number): T[] | undefined;
    getNumberOfItems(): number;
}
