import { baralla } from "./baralla";

export class jugador {
    private _nom: string;
    private _personatges: baralla;

    // Crea un nou jugador amb un nom i una baralla buida.
    constructor(nom: string) {
        this._nom = nom;
        this._personatges = new baralla();
    }

    // Getters i Setters
    get nom(): string {
        return this._nom;
    }

    // Canvia el nom del jugador.
    set nom(newName: string) {
        this._nom = newName;
    }

    // Retorna la baralla del jugador.
    get personatges(): baralla {
        return this._personatges;
    }

    // Neteja la baralla del jugador per reiniciar-la.
    public ReiniciarBaralla(): void {
        this._personatges.borrarBaralla();
    }


}
