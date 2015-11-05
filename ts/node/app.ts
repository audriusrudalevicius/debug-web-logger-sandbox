///<reference path='../../typings/node/node.d.ts' />
import LogFactory, {ILogger} from "debug-web-logger";
let logger:ILogger = LogFactory.getLogger('WebApp:test');
logger.info('it works');