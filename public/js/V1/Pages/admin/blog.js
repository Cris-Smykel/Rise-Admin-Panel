import { HeaderController } from "../../Controllers/HeaderController";
import { DomController } from "../../Controllers/DomController";

const domController = new DomController();

const headerController = new HeaderController(domController);
headerController.main();
