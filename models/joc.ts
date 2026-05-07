import { jugador } from "./Jugador";
import { baralla } from "./baralla";
import { characters } from "./Characters";

export class Joc {

    private _jugador: jugador;
    private _jugador2: jugador;
    private _baralla: baralla;


    constructor(nomjugador: string, nomjugador2: string) {
        this._jugador = new jugador(nomjugador);
        this._jugador2 = new jugador(nomjugador2);
        this._baralla = new baralla();
        this._baralla.iniciarBaralla();
    }

    get jugador(): jugador {
        return this._jugador;
    }
    set jugador(p: jugador) {
        this._jugador = p;
    }
    get jugador2(): jugador {
        return this._jugador2;
    }
    set jugador2(p: jugador) {
        this._jugador2 = p;
    }

    public inicijoc(): void {

        this.donarPersonatge(this._jugador);
        this.donarPersonatge(this._jugador2);
    }

    public reiniciarjoc(): void {

        this._jugador.ReiniciarBaralla();
        this._jugador2.ReiniciarBaralla();
        this.inicijoc();
    }

    public donarPersonatge(jugador: jugador): void {

        let PersonatgeDonat: characters | undefined = this._baralla.iniciarBaralla();
        if (PersonatgeDonat) jugador.personatges.push(PersonatgeDonat);
    }
}