import { characters } from "./characters";

const Paladi: characters = new characters("Paladi", 5, 1, 3);
const Magic: characters = new characters("Magic", 3, 4, 2);
const Arquer: characters = new characters("Arquer", 2, 5, 1);
const Cavaller: characters = new characters("Cavaller", 4, 2, 2);
const Explosiu: characters = new characters("Explosiu", 2, 7, 0);
const Golem: characters = new characters("Golem", 3, 1, 5);
const Exodia: characters = new characters("Exodia", 10, 10, 0);
const Zurullin: characters = new characters("Zurullin", 1, 0, 0);
const totselspersonatges: characters[] = [Paladi, Magic, Arquer, Cavaller, Explosiu, Golem];


export class baralla {

    private _baralla: characters[];

    constructor() {
        this._baralla = [];
    }

    get getBaralla(): characters[] {
        return this._baralla;
    }

    public iniciarBaralla(): void {

        for (let i = 0; i < 3; i++) {

            let personatge = Zurullin;
            let aleatori = Math.floor(Math.random() * 7) + 1;

            if (aleatori == 7) {
                aleatori = Math.floor(Math.random() * 7) + 1;

                if (aleatori == 7) {
                    personatge = Exodia;
                } else {
                    personatge = totselspersonatges[aleatori];
                }

            } else {
                personatge = totselspersonatges[aleatori];

            }
            this._baralla.push(personatge);

        }
    }

    public borrarBaralla(): void {
        this._baralla = [];
    }
}