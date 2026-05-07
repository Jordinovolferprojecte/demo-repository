import { characters } from "./models/Characters";
import { Joc } from "./models/Joc";

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

    public render(joc: Joc): void {

        //Netejer pantalla
        this._divPlayer1.innerHTML = "";
        this._divPlayer2.innerHTML = "";

        // Render player 1

        this.renderCharacters(
            joc.player1.personatges,
            this._divPlayer1
        );

        // Render player 2
        this.renderCharacters(
            joc.player2.personatges,
            this._divPlayer2
        );



    }

    private renderCharecters(Charecters: characters): void {

    }

    private renderCharecter(Charecter: characters): void {

    }
}