import { Joc } from "./models/joc";
import { View } from "./View";

export class Controller {
    private _joc: Joc;
    private _view: View;

    constructor(joc: Joc, view: View) {
        this._joc = joc;
        this._view = view;
    }
}