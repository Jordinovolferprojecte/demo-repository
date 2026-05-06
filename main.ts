import { Controller } from "./controller";
import { Joc } from "./models/joc";
import { View } from "./view";

const view = new View();
const joc = new Joc("ayoub", "gerald");
const controller = new Controller(joc, view);

controller.iniciar();