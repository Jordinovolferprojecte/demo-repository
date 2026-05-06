import { characters } from "./characters";

const Paladi: characters = new characters("Paladi", 5, 1, 3);
const Magic: characters = new characters("Magic", 3, 4, 2);
const Arquer: characters = new characters("Arquer", 2, 5, 1);
const Cavaller: characters = new characters("Cavaller", 4, 2, 2);
const Explosiu: characters = new characters("Explosiu", 2, 7, 0);
const Golem: characters = new characters("Golem", 3, 1, 5);
const Exodia: characters = new characters("Exodia", 10, 10, 0);
const Saitama: characters = new characters("One Punch Man", 3, 11, 3);



export class baralla {

    private _baralla: characters[];

    constructor() {
        this._baralla = [];
    }

    get getBaralla(): characters[] {
        return this._baralla;
    }
}