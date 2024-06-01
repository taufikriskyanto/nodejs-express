import winston from "winston";

test("Create New Logger With Level logger", () => {
    const logger = winston.createLogger({
        level: "debug",
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.log({level : "error",message : "Error Message"});

    logger.log({ level : "warn",message : "Warn Message" });

    logger.log({level : "info",message : "Info Message"});

    logger.log({level : "http",message : "HTTP Message"});

    logger.log({level : "debug",message : "Debug Message"});

    logger.log({level : "verbose", message : "Verbose Message"});

    logger.log({level : "silly",message : "Silly Message"});
});

test("Logging with shortcut function", () => {
    const logger = winston.createLogger({
        level: "debug",
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.error("Error Message");

    logger.warn("Warn Message");

    logger.info("Info Message");

    logger.http("HTTP Message");

    logger.debug("Debug Message");

    logger.verbose("Verbose Message");

    logger.silly("Silly Message");
});