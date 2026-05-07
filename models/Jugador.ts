import { baralla } from "./baralla";
import { characters } from "./Characters";
export class jugador {
    private _nom: string;
    private _personatges: baralla;

    constructor(nom: string) {
        this._nom = nom;
        this._personatges = new baralla();
    }

    // Getters i Setters
    get nom(): string {
        return this._nom;
    }

    set nom(newName: string) {
        this._nom = newName;
    }

    get personatges(): baralla {
        return this._personatges;
    }

    public ReiniciarBaralla(): void {
        this._personatges.borrarBaralla();
    }


}
