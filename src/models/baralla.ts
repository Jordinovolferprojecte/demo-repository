import { characters } from "./characters";

const Paladi: characters = new characters("Paladi", 5, 1, 3, "src/imatges/Paladi.jpg");
const Magic: characters = new characters("Magic", 3, 4, 2, "src/imatges/Magic.jpg");
const Arquer: characters = new characters("Arquer", 2, 5, 1, "src/imatges/Arquer.jpg");
const Cavaller: characters = new characters("Cavaller", 4, 2, 2, "src/imatges/Cavaller.jpg");
const Explosiu: characters = new characters("Explosiu", 2, 7, 0, "src/imatges/Explosiu.jpg");
const Golem: characters = new characters("Golem", 3, 1, 5, "src/imatges/Golem.jpg");
const Exodia: characters = new characters("Exodia", 10, 10, 0, "src/imatges/Exodia.jpg");
const Zurullin: characters = new characters("Zurullin", 1, 0, 0, "src/imatges/Zurullin.jpg");
const totselspersonatges: characters[] = [Paladi, Magic, Arquer, Cavaller, Explosiu, Golem];


export class baralla {

    private _baralla: characters[];
    // Crea una baralla buida per acumular cartes.
    constructor() {
        this._baralla = [];
    }

    // Retorna la llista actual de cartes de la baralla.
    get getBaralla(): characters[] {
        return this._baralla;
    }

    // Retorna una carta aleatòria, amb una petita probabilitat d'aconseguir Exodia.
    public iniciarBaralla(): characters | undefined {


        let personatge = Zurullin;
        let aleatori = Math.floor(Math.random() * 7) + 1;


        if (aleatori == 7) {
            aleatori = Math.floor(Math.random() * 7) + 1;

            if (aleatori == 7) {
                personatge = Exodia;
            } else {
                personatge = totselspersonatges[aleatori - 1];
            }

        } else {
            personatge = totselspersonatges[aleatori - 1];

        }

        return personatge;

    }

    // Afegeix una carta a la baralla.
    public push(card: characters): void {
        this._baralla.push(card);
    }

    // Neteja totes les cartes de la baralla.
    public borrarBaralla(): void {
        this._baralla = [];
    }
}
