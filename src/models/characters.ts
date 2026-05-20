export class characters {
    private _nom: string;
    private _vida: number;
    private _atac: number;
    private _defensa: number;
    private _imatge: string;


    // Crea un personatge amb noms, vida, atac, defensa i imatge.
    constructor(nom: string, vida: number, atac: number, defensa: number, imatge: string) {
        this._nom = nom;
        this._vida = vida;
        this._atac = atac;
        this._defensa = defensa;
        this._imatge = imatge;

    }

    // Retorna el nom del personatge.
    get nom(): string {
        return this._nom;
    }

    // Canvia el nom del personatge.
    set nom(nom: string) {
        this._nom = nom;
    }

    // Retorna la vida actual del personatge.
    get vida(): number {
        return this._vida;
    }

    // Assigna la vida del personatge i permet actualitzar-la.
    set vida(vida: number) {
        this._vida = vida;
    }

    // Retorna el valor d'atac del personatge.
    get atac(): number {
        return this._atac;
    }

    // Assigna el valor d'atac del personatge.
    set atac(atac: number) {
        this._atac = atac;
    }

    // Retorna el valor de defensa del personatge.
    get defensa(): number {
        return this._defensa;
    }

    // Assigna el valor de defensa del personatge.
    set defensa(defensa: number) {
        this._defensa = defensa;
    }

    // Retorna la ruta de la imatge del personatge.
    get imatge(): string {
        return this._imatge;
    }

    // Assigna la ruta de la imatge del personatge.
    set imatge(imatge: string) {
        this._imatge = imatge;
    }

}
