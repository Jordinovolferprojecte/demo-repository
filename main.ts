import { Controller } from "./controller";
import { Game } from "./game";
import { View } from "./view";

const view = new View();
const game = new Game("hola ayoub");
const controller = new Controller(game, view);

controller.init();