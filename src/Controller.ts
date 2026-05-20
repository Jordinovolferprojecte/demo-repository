import { Joc } from "./models/Joc";
import { View } from "./View";

export class Controller {
    private _joc: Joc;
    private _view: View;

    // Constructor del controlador: rep el model i la vista i llig els esdeveniments.
    constructor(joc: Joc, view: View) {
        this._joc = joc;
        this._view = view;
        this.bindEvents();
    }

    // Inicia el joc i renderitza l'estat inicial.
    public iniciar(): void {
        this._joc.inicijoc();
        this._view.render(this._joc);
    }

    // Enllaça els botons i altres events de la vista amb la lògica del controlador.
    private bindEvents(): void {
        this._view.btnLluitar.addEventListener("click", () => this.lluitar());
    }


    // Executa un torn de lluita, calcula el dany i actualitza les cartes i el torn.
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
                if (attackerIsPlayer1) {
                    this._joc.playerWins();
                } else {
                    this._joc.dealerWins();
                }
                this._view.render(this._joc);
                this._view.showWinner(`${atacant.nom} ha ganado`);
                this._view.setFightButtonEnabled(false);
                return;
            }

            this._joc.torn = defensor;
            this._view.render(this._joc);

        });
        if (defensor.personatges.getBaralla.length === 0) {
            this._view.render(this._joc);
            console.log("Ha perdut! El joc acaba");
            this._view.JugadorGuanya(atacant);
            return;
        }
    }
}   
