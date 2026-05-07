export class characters {
    private _nom: string;
    private _vida: number;
    private _atac: number;
    private _defensa: number;

    constructor(nom: string, vida: number, atac: number, defensa: number) {
        this._nom = nom;
        this._vida = vida;
        this._atac = atac;
        this._defensa = defensa;

    }

    get nom(): string {
        return this._nom;
    }

    set nom(nom: string) {
        this._nom = nom;
    }

    get vida(): number {
        return this._vida;
    }

    set vida(vida: number) {
        this._vida = vida;
    }

    get atac(): number {
        return this._atac;
    }

    set atac(atac: number) {
        this._atac = atac;
    }

    get defensa(): number {
        return this._defensa;
    }

    set defensa(defensa: number) {
        this._defensa = defensa;
    }


}