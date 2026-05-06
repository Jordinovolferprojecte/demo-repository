import { jugador } from "./jugador";

export class Joc {

    private _jugador: jugador;
    private _jugador2: jugador;

    constructor(nomjugador: string, nomjugador2: string) {
        this._jugador = new jugador(nomjugador);
        this._jugador2 = new jugador(nomjugador2);

    }

    get jugador(): jugador {
        return this._jugador;
    }
    set jugador(p: jugador) {
        this._jugador = p;
    }
    get jugador2(): jugador {
        return this._jugador;
    }
    set jugador2(p: jugador) {
        this._jugador2 = p;
    }

    public inicijoc(): void {

    }

    public reiniciarjoc(): void {


        this.inicijoc();
    }
}