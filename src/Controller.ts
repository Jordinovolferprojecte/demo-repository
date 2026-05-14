import { Joc } from "./models/Joc";
import { View } from "./View";

export class Controller {
    private _joc: Joc;
    private _view: View;


    constructor(joc: Joc, view: View) {
        this._joc = joc;
        this._view = view;
        this.bindEvents();
    }

    public iniciar(): void {
        this._joc.inicijoc();
        this._view.render(this._joc);
    }

    private bindEvents(): void {
        this._view.btnLluitar.addEventListener("click", () => this.startLluita());
    }

    private startLluita(): void {
        const fight = () => {
            if (this._joc.jugador.personatges.getBaralla.length === 0 || this._joc.jugador2.personatges.getBaralla.length === 0) {
                console.log("Joc acabat");
                return;
            }
            this.lluitar();
            setTimeout(fight, 1000); // Wait 1 second between fights
        };
        fight();
    }

    private reiniciar(): void {
        this._joc.reiniciarjoc();
    }



    public lluitar(): void {
        let length1 = this._joc.jugador.personatges.getBaralla.length;
        let length2 = this._joc.jugador2.personatges.getBaralla.length;

        let aleatori1 = Math.floor(Math.random() * length1) + 1;
        let aleatori2 = Math.floor(Math.random() * length2) + 1;
        const atacant = this._joc.torn;
        const defensor = atacant === this._joc.jugador ? this._joc.jugador2 : this._joc.jugador;

        const personatgeAtacant = atacant.personatges.getBaralla[aleatori2 - 1];
        const personatgeDefensor = defensor.personatges.getBaralla[aleatori1 - 1];

        console.log("1: " + aleatori1);
        console.log("2: " + aleatori2);

        const dany = Math.max(1, personatgeAtacant.atac - personatgeDefensor.defensa);

        personatgeDefensor.vida -= dany;

        if (personatgeDefensor.vida <= 0) {
            defensor.personatges.getBaralla.shift();
        }

        if (defensor.personatges.getBaralla.length === 0) {
            console.log("Ha perdut! El joc acaba");
            return;
        }

        this._joc.torn = defensor;

        this._view.render(this._joc);
    }
}   
