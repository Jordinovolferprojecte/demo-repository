import { baralla } from "./models/baralla";
import { characters } from "./models/characters";
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
    private _divMatchesWonPlayer2: HTMLDivElement;

    // Botons
    private _btn1: HTMLButtonElement;
    private _btn2: HTMLButtonElement;
    private _btnLluitar: HTMLButtonElement;

    constructor() {
        this._divPlayer1 = document.getElementById("divPlayer1Cards") as HTMLDivElement;
        this._divPlayer2 = document.getElementById("divPlayer2Cards") as HTMLDivElement;
        this._btn1 = document.getElementById("btn1") as HTMLButtonElement;
        this._btn2 = document.getElementById("btn2") as HTMLButtonElement;
        this._btnLluitar = document.getElementById("btnLluitar") as HTMLButtonElement;
        this._divPlayer1Points = document.getElementById("divPlayer1Points") as HTMLDivElement;
        this._divPlayer2Points = document.getElementById("divPlayer2Points") as HTMLDivElement;
        this._divMatchesWonPlayer1 = document.getElementById("divMatchesWonPlayer1") as HTMLDivElement;
        this._divMatchesWonPlayer2 = document.getElementById("divMatchesWonPlayer2") as HTMLDivElement;
    }

    // Getters per als botons 
    get btn1(): HTMLButtonElement {
        return this._btn1;
    }

    get btn2(): HTMLButtonElement {
        return this._btn2;
    }

    get btnLluitar(): HTMLButtonElement {
        return this._btnLluitar;
    }


    //activa els metodes que creen i ensenyen les cartes i les aplica a cada jugador
    public render(joc: Joc): void {

        this._divPlayer1Points.innerHTML = joc.jugador.points.toString();
        this._divPlayer2Points.innerHTML = joc.jugador2.points.toString();

        this._divMatchesWonPlayer1.innerHTML = joc.matchesWonPlayer().toString();
        this._divMatchesWonPlayer2.innerHTML = joc.matchesWonDealer().toString();

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

        // Crear la imatge del personatge
        const img = document.createElement('img');
        img.src = character.imatge;
        img.alt = character.nom;
        img.classList.add('character-image');

        // Crear el contenidor de l'estadística
        const stats = document.createElement('div');
        stats.classList.add('character-stats');
        stats.innerHTML = `<p><strong>${character.nom}</strong></p>
                          <p>Vida: ${character.vida}</p>
                          <p>Atac: ${character.atac}</p>
                          <p>Defensa: ${character.defensa}</p>`;

        el.appendChild(img);
        el.appendChild(stats);
        return el;
    }

    /*
    getVidaDisplay(vida: number): string{
        
        return vida.toString();
    }
    getAtacDisplay(atac: number): string {

        return atac.toString();
    }
    getDefensaDisplay(defensa: number): string {

        return defensa.toString();
    }
    */

}
