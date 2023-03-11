import { HeaderController } from "../../Controllers/HeaderController";
import { DomController } from "../../Controllers/DomController";
import { AsideController } from "../../Controllers/AsideController";
import { RequestController } from "../../Controllers/RequestController";

const domController = new DomController();
const requestController = new RequestController();

const headerController = new HeaderController(domController);
headerController.main();

const asideController = new AsideController(domController, requestController);
asideController.main();
