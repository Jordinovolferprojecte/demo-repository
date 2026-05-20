import { baralla } from "./models/baralla";
import { characters } from "./models/characters";
import { Joc } from "./models/Joc";
import type { jugador } from "./models/Jugador";

export class View {

    // Zones cartes 
    private _divPlayer1: HTMLDivElement;
    private _divPlayer2: HTMLDivElement;


    // Contador partides guanyades
    private _divMatchesWonPlayer1: HTMLDivElement;
    private _divMatchesWonPlayer2: HTMLDivElement;
    private _divGuanyador: HTMLDivElement;

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


    //activa els metodes que creen i ensenyen les cartes i les aplica a cada jugador
    public render(joc: Joc): void {



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

        Characters.forEach((character, idx) => {
            const el = this.renderPersonatge(character);
            el.dataset.index = idx.toString();
            // mark which player this card belongs to (1 or 2)
            el.dataset.player = divContainer === this._divPlayer1 ? '1' : '2';
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

    public JugadorGuanya(jugador: jugador): void {

        this._divGuanyador.innerHTML = `<p><strong>${jugador.nom} és el guanyador</strong><p>`;
        this._divGuanyador.style.visibility = "visible";

    }
    // Animar ataque entre cartas: attackerIsPlayer1 indica qué jugador ataca,
    // attackerIndex y defenderIndex son índices dentro de sus baralles.
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
        attackerEl.style.transition = 'transform 20s ease';
        attackerEl.style.transform = attackerIsPlayer1 ? 'translateX(20px) scale(1.03)' : 'translateX(-20px) scale(1.03)';

        // defender hit effect
        defenderEl.classList.add('hit');

        // damage label
        const dmg = document.createElement('div');
        dmg.classList.add('damage-label');
        dmg.textContent = `-${damage}`;
        defenderEl.appendChild(dmg);

        const totalDuration = 1400;
        setTimeout(() => {
            attackerEl.style.transform = '';
            attackerEl.style.transition = '';
            defenderEl.classList.remove('hit');
            if (dmg.parentElement) dmg.parentElement.removeChild(dmg);
            callback();
        }, totalDuration);
    }


}
