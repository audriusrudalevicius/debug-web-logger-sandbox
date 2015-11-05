var debug_web_logger_1 = require("debug-web-logger");
var WebApp = (function () {
    function WebApp() {
    }
    WebApp.start = function () {
        var logger = debug_web_logger_1.default.getLogger('WebApp:test');
        logger.info("It works!");
    };
    return WebApp;
})();
exports.WebApp = WebApp;
