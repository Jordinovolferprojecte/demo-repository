import { Game } from "./game";
import { View } from "./view";

export class Controller {
    private _game: Game;
    private _view: View;

    constructor(game: Game, view: View) {
        this._game = game;
        this._view = view;

    }

    public init(): void {

    }
}