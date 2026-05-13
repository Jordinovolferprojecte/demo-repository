import { Joc } from "./models/joc";
import { View } from "./View";
import { characters } from "./models/Characters";

export class Controller {
    private _joc: Joc;
    private _view: View;


    constructor(joc: Joc, view: View) {
        this._joc = joc;
        this._view = view;
    }

    public iniciar(): void {
        this._joc.inicijoc();
    }

    private reiniciar(): void {
        this._joc.reiniciarjoc();
    }

    public mal(): void {

    }

    public malafectat(): void {

    }

    public mostrarStats(): void {

    }
}   
