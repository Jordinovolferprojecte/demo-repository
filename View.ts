import { baralla } from "./models/baralla";
import { characters } from "./models/Characters";
import { Joc } from "./models/joc";

export class View {

    // Zones cartes 
    private _divPlayer1: HTMLDivElement;
    private _divPlayer2: HTMLDivElement;

    // Marcador punts
    private _divPlayer1Points: HTMLDivElement;
    private _divPlayer2Points: HTMLDivElement;

    // Contador partides guanyades
    private _divMatchesWonPlayer1: HTMLDivElement;
    private _divMatchesWonDealer2: HTMLDivElement;

    // Botons
    private _btn1: HTMLButtonElement;
    private _btn2: HTMLButtonElement;

    constructor() {
        this._divPlayer1 = document.getElementById("divPlayer1Cards") as HTMLDivElement;
        this._divPlayer2 = document.getElementById("divPlayer2Cards") as HTMLDivElement;
        this._btn1 = document.getElementById("btn1") as HTMLButtonElement;
        this._btn2 = document.getElementById("btn2") as HTMLButtonElement;
        this._divPlayer1Points = document.getElementById("divPlayer1Points") as HTMLDivElement;
        this._divPlayer2Points = document.getElementById("divPlayer2Points") as HTMLDivElement;
        this._divMatchesWonPlayer1 = document.getElementById("divMatchesWonPlayer1") as HTMLDivElement;
        this._divMatchesWonDealer2 = document.getElementById("divMatchesWonPlayer2") as HTMLDivElement;
    }

    // Getters per als botons 
    get btn1(): HTMLButtonElement {
        return this._btn1;
    }

    get btn2(): HTMLButtonElement {
        return this._btn2;
    }


    //activa els metodes que creen i ensenyen les cartes i les aplica a cada jugador
    public render(joc: Joc): void {

        let jugador1Cartes: baralla = joc.jugador.personatges;
        this.renderPersonatges(jugador1Cartes.getBaralla, this._divPlayer1);

        let jugador2Cartes: baralla = joc.jugador2.personatges;
        this.renderPersonatges(jugador2Cartes.getBaralla, this._divPlayer2);

    }

    //Metode que tria la carta correcta i la posa en el div del jugador corresponent
    private renderPersonatges(Characters: characters[], divContainer: HTMLElement): void {
        divContainer.innerHTML = " ";

        Characters.forEach((character) => {
            const el = this.renderPersonatge(character);
            divContainer.appendChild(el);
        });

    }


    //Metode que crea visualment la carta
    private renderPersonatge(character: characters): HTMLElement {

        const el = document.createElement('div');
        el.classList.add('character');

        //falta inserir que cada personatge tingui una imatge associada

        return el;
    }


}
