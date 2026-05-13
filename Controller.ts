import { Joc } from "./models/joc";
import { View } from "./View";

export class Controller {
    private _joc: Joc;
    private _view: View;


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

    public start(): void {
        this._joc.donarPersonatge(this._joc.jugador);
        this._joc.donarPersonatge(this._joc.jugador2);

        this._view.render(this._joc);
    }

    public lluitar(): void {

        const atacant = this._joc.torn;
        const defensor = atacant === this._joc.jugador ? this._joc.jugador2 : this._joc.jugador;

        const personatgeAtacant = atacant.personatges.getBaralla[0];
        const personatgeDefensor = defensor.personatges.getBaralla[0];

        const dany = personatgeAtacant.atac - personatgeDefensor.defensa;

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
