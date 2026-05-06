export class Jugador {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    // Getters i Setters
    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }

    // Methods
}