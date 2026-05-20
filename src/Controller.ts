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
        this._view.btnLluitar.addEventListener("click", () => this.lluitar());
    }


    public lluitar(): void {
        const atacant = this._joc.torn;
        const defensor = atacant === this._joc.jugador ? this._joc.jugador2 : this._joc.jugador;

        const attacker = atacant.personatges.getBaralla.length;
        const defender = defensor.personatges.getBaralla.length;

        if (attacker === 0 || defender === 0) return;

        const aleatoriAt = Math.floor(Math.random() * attacker);
        const aleatoriDef = Math.floor(Math.random() * defender);

        const personatgeAtacant = atacant.personatges.getBaralla[aleatoriAt];
        const personatgeDefensor = defensor.personatges.getBaralla[aleatoriDef];

        const dany = Math.max(1, personatgeAtacant.atac - personatgeDefensor.defensa);

        const attackerIsPlayer1 = atacant === this._joc.jugador;


        this._view.animateAttack(attackerIsPlayer1, aleatoriAt, aleatoriDef, dany, () => {
            // aplica el mal i no deixa que el valor sigui negatiu 
            personatgeDefensor.vida = Math.max(0, personatgeDefensor.vida - dany);

            // la carta mor quan arribi al 0 de vida
            if (personatgeDefensor.vida === 0) {
                defensor.personatges.getBaralla.splice(aleatoriDef, 1);
            }

            if (defensor.personatges.getBaralla.length === 0) {
                console.log("Ha perdut! El joc acaba");
                return;
            }

            this._joc.torn = defensor;
            this._view.render(this._joc);
        });
    }
}   
