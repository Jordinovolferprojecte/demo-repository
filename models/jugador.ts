import { characters } from "./Characters";
export class jugador {
    private _nom: string;
    private _personatges: characters[] = [];

    constructor(nom: string) {
        this._nom = nom;
    }

    // Getters i Setters
    get nom(): string {
        return this._nom;
    }

    set nom(newName: string) {
        this._nom = newName;
    }

    get personatges(): characters[] {
        return this._personatges;
    }


}