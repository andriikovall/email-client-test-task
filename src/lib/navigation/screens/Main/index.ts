import { connectController } from "../../../utils/connectController";
// todo: pretty import paths
import { useMainProps } from "./Main.controller";
import { MainView } from "./Main.view";

export const Main = connectController(useMainProps, MainView);