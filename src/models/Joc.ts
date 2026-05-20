import { jugador } from "./Jugador";
import { baralla } from "./baralla";
import { characters } from "./characters";

export class Joc {

    private _jugador: jugador;
    private _jugador2: jugador;
    private _baralla: baralla;
    private _torn: jugador;
    private _matchesWonPlayer: number;
    private _matchesWonPlayer2: number;


    constructor(nomjugador: string, nomjugador2: string) {
        this._jugador = new jugador(nomjugador);
        this._jugador2 = new jugador(nomjugador2);
        this._baralla = new baralla();
        this._baralla.iniciarBaralla();
        this._torn = this._jugador;
        this._matchesWonPlayer = 0;
        this._matchesWonPlayer2 = 0;
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

    get torn(): jugador {
        return this._torn;
    }
    set torn(p: jugador) {
        this._torn = p;
    }

    public matchesWonPlayer(): number {
        return this._matchesWonPlayer;
    }

    public matchesWonDealer(): number {
        return this._matchesWonPlayer2;
    }

    public playerWins(): void {
        this._matchesWonPlayer++;
    }

    public dealerWins(): void {
        this._matchesWonPlayer2++;
    }

    public inicijoc(): void {
        let i: number = 3;
        for (; i >= 1; i--) {
            this.donarPersonatge(this._jugador);
            this.donarPersonatge(this._jugador2);
        }


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

