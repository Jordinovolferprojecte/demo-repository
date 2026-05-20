import { baralla } from "./models/baralla";
import { characters } from "./models/characters";
import { Joc } from "./models/Joc";
import type { jugador } from "./models/Jugador";

export class View {

    // Zones cartes 
    private _divPlayer1: HTMLDivElement;
    private _divPlayer2: HTMLDivElement;
    private _divTurn: HTMLDivElement;


    // Contador partides guanyades

    private _divMatchesWonPlayer1: HTMLDivElement;
    private _divMatchesWonPlayer2: HTMLDivElement;
    private _divGuanyador: HTMLDivElement;

    // Botons
    private _btn1: HTMLButtonElement;
    private _btn2: HTMLButtonElement;
    private _btnLluitar: HTMLButtonElement;

    // Constructor de la vista: obté referències als elements HTML que cal manipular.
    constructor() {
        this._divPlayer1 = document.getElementById("divPlayer1Cards") as HTMLDivElement;
        this._divPlayer2 = document.getElementById("divPlayer2Cards") as HTMLDivElement;
        this._divTurn = document.getElementById("turnIndicator") as HTMLDivElement;
        this._btn1 = document.getElementById("btn1") as HTMLButtonElement;
        this._btn2 = document.getElementById("btn2") as HTMLButtonElement;
        this._btnLluitar = document.getElementById("btnLluitar") as HTMLButtonElement;

        this._divMatchesWonPlayer1 = document.getElementById("divMatchesWonPlayer1") as HTMLDivElement;
        this._divMatchesWonPlayer2 = document.getElementById("divMatchesWonPlayer2") as HTMLDivElement;
        this._divGuanyador = document.getElementById("guanyador") as HTMLDivElement;
        if (this._divGuanyador) {
            this._divGuanyador.style.visibility = "hidden";
        }
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

    // Renderitza l'estat del joc: cartes, punts, torn i ocultació de missatges anteriors.
    public render(joc: Joc): void {
        this.hideWinner();
        if (this._divTurn) {
            this._divTurn.textContent = `Turno de ${joc.torn.nom}`;
        }

        this._divMatchesWonPlayer1.innerHTML = joc.matchesWonPlayer().toString();
        this._divMatchesWonPlayer2.innerHTML = joc.matchesWonDealer().toString();

        let jugador1Cartes: baralla = joc.jugador.personatges;
        this.renderPersonatges(jugador1Cartes.getBaralla, this._divPlayer1);

        let jugador2Cartes: baralla = joc.jugador2.personatges;
        this.renderPersonatges(jugador2Cartes.getBaralla, this._divPlayer2);

    }


    //Metode que tria la carta correcta i la posa en el div del jugador corresponent
    // Renderitza la llista de cartes dins del contenidor corresponent.
    private renderPersonatges(Characters: characters[], divContainer: HTMLElement): void {
        divContainer.innerHTML = " ";

        Characters.forEach((character, idx) => {
            const el = this.renderPersonatge(character);
            el.dataset.index = idx.toString();
            // mark which player this card belongs to (1 or 2)
            el.dataset.player = divContainer === this._divPlayer1 ? '1' : '2';
            divContainer.appendChild(el);
        });

    }


    // Crea el DOM d'una carta amb la seva imatge i estadístiques.
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

    // Mostra un missatge de guanyador quan un jugador ha vençut.
    public JugadorGuanya(jugador: jugador): void {

        this._divGuanyador.innerHTML = `<p><strong>${jugador.nom} és el guanyador</strong><p>`;
        this._divGuanyador.style.visibility = "visible";

    }

    // Animació de l'atac entre dues cartes i callback quan acaba.
    public animateAttack(attackerIsPlayer1: boolean, attackerIndex: number, defenderIndex: number, damage: number, callback: () => void): void {
        const attackerDiv = attackerIsPlayer1 ? this._divPlayer1 : this._divPlayer2;
        const defenderDiv = attackerIsPlayer1 ? this._divPlayer2 : this._divPlayer1;

        const attackerEl = attackerDiv.querySelector(`.character[data-index="${attackerIndex}"]`) as HTMLElement;
        const defenderEl = defenderDiv.querySelector(`.character[data-index="${defenderIndex}"]`) as HTMLElement;

        if (!attackerEl || !defenderEl) {
            callback();
            return;
        }

        // small translate to indicate attack direction
        attackerEl.style.transition = 'transform 0.35s ease';
        attackerEl.style.transform = attackerIsPlayer1 ? 'translateX(20px) scale(1.03)' : 'translateX(-20px) scale(1.03)';

        // defender hit effect
        defenderEl.classList.add('hit');

        // damage label
        const dmg = document.createElement('div');
        dmg.classList.add('damage-label');
        dmg.textContent = `-${damage}`;
        defenderEl.appendChild(dmg);

        const totalDuration = 2000;
        setTimeout(() => {
            attackerEl.style.transform = '';
            attackerEl.style.transition = '';
            defenderEl.classList.remove('hit');
            if (dmg.parentElement) dmg.parentElement.removeChild(dmg);
            callback();
        }, totalDuration);
    }

    // Mostra un missatge genèric de guanyador amb el text proporcionat.
    public showWinner(winnerMessage: string): void {
        if (!this._divGuanyador) return;
        this._divGuanyador.textContent = winnerMessage;
        this._divGuanyador.style.visibility = 'visible';
        this._divGuanyador.style.opacity = '1';
        this._divGuanyador.style.transform = 'translate(-50%, 0) scale(1)';
    }

    // Amaga el missatge de guanyador i restableix l'estat del div corresponent.
    public hideWinner(): void {
        if (!this._divGuanyador) return;
        this._divGuanyador.textContent = '';
        this._divGuanyador.style.visibility = 'hidden';
        this._divGuanyador.style.opacity = '0';
        this._divGuanyador.style.transform = 'translate(-50%, -10px) scale(0.98)';
    }

    // Activa o desactiva el botó de lluita segons toqui.
    public setFightButtonEnabled(enabled: boolean): void {
        this._btnLluitar.disabled = !enabled;
    }


}
