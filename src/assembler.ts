import { AppController } from "./app.controller";
import { AppService } from "./app.service";

const appService = new AppService();
const appcontroller = new AppController(appService);
const hello = appcontroller.getHello();

console.log(hello);