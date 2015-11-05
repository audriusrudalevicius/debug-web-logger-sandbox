import LogFactory, {ILogger} from "debug-web-logger";

export class WebApp {
    public static start():void {
        let logger:ILogger = LogFactory.getLogger('WebApp:test');
        logger.info("It works!");
    }
}