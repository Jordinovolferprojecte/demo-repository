import { Controller } from "./controller";
import { Joc } from "./models/Joc";
import { View } from "./View";

const view = new View();
const joc = new Joc("ayoub", "gerald");
const controller = new Controller(joc, view);

controller.iniciar();
