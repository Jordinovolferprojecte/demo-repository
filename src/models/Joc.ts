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


    // Crea un nou joc amb dos jugadors i prepara la baralla inicial.
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

    // Retorna el nombre de partides guanyades pel primer jugador.
    public matchesWonPlayer(): number {
        return this._matchesWonPlayer;
    }

    // Retorna el nombre de partides guanyades pel segon jugador.
    public matchesWonDealer(): number {
        return this._matchesWonPlayer2;
    }

    // Incrementa el marcador de victòries del primer jugador.
    public playerWins(): void {
        this._matchesWonPlayer++;
    }

    // Incrementa el marcador de victòries del segon jugador.
    public dealerWins(): void {
        this._matchesWonPlayer2++;
    }

    // Inicia el joc donant tres cartes a cada jugador.
    public inicijoc(): void {
        let i: number = 3;
        for (; i >= 1; i--) {
            this.donarPersonatge(this._jugador);
            this.donarPersonatge(this._jugador2);
        }


    }

    // Reinicia el joc netejant les baralles i repartint noves cartes.
    public reiniciarjoc(): void {

        this._jugador.ReiniciarBaralla();
        this._jugador2.ReiniciarBaralla();
        this.inicijoc();
    }

    // Dona una carta aleatòria al jugador indicat.
    public donarPersonatge(jugador: jugador): void {

        let PersonatgeDonat: characters | undefined = this._baralla.iniciarBaralla();
        if (PersonatgeDonat) jugador.personatges.push(PersonatgeDonat);
    }


}

