import { characters } from "./characters";
export class jugador {
    private _nom: string;
    private _personatges: characters[] = [];

    constructor(nom: string) {
        this._nom = nom;
    }

    // Getters i Setters
    get nom(): string {
        return this._nom;
    }

    set nom(newName: string) {
        this._nom = newName;
    }

    get personatges(): characters[] {
        return this._personatges;
    }


    // Methods

    public setEquip(equip: characters[]): void {
        this._personatges = equip;
    }

    // Comprovar si al jugador li queden personatges vius
    public tePersonatgesVius(): boolean {
        for (let personatge of this._personatges) {
            if (personatge.vida > 0) {
                return true;
            }
        }
        return false;
    }
}