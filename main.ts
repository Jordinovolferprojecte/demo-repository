import { Controller } from "./controller";
import { Joc } from "./models/joc";
import { View } from "./view";

const view = new View();
const joc = new Joc();
const controller = new Controller(joc, view);