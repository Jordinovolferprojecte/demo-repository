import { Joc } from "./models/joc";
import { View } from "./View";
import { characters } from "./models/Characters";
import { jugador } from "./models/Jugador";

export class Controller {
    private _joc: Joc;
    private _view: View;
    private _turn: Boolean = false; //Detecta si el turn es per al jugador1(false) o jugador2(true)
    private _jugadorActual: number = 1;


    constructor(joc: Joc, view: View) {
        this._joc = joc;
        this._view = view;
    }

    public iniciar(): void {
        this._joc.inicijoc();
    }

    private reiniciar(): void {
        this._joc.reiniciarjoc();
    }

    private getJugadorActual(): jugador {
        if (this._jugadorActual === 1) {
            return this._joc.jugador;
        } else {
            return this._joc.jugador2;
        }
    }

    private canviarTorn(): void {
        if (this._jugadorActual === 1) {
            this._jugadorActual = 2;
        } else {
            this._jugadorActual = 1;
        }
    }


    public malafectat(atacant: characters, defensor: characters): void {
        const dany = atacant.atac - defensor.defensa;

        if (dany > 0) {
            defensor.vida -= dany;
        } else {
            defensor.vida -= 1; // mal mínim
        }

        if (defensor.vida < 0) {
            defensor.vida = 0;
        }
    }



    public mal(): void {

    }

    public mostrarStats(): void {

    }
}   
