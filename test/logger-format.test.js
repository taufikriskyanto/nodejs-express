import winston from "winston";

test("Logging with shortcut & format function", () => {
    const logger = winston.createLogger({
        level: "debug",
        //as a default format json in log, 
        //if your not declare format json in config
         //format: winston.format.json(), 

        //Contoh format log simple 
        //http: HTTP Message
        //debug: Debug Message
        format: winston.format.simple(),
        
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

test("Logging with format printf", () => {
    const logger = winston.createLogger({
        level: "debug",
        //as a default format json in log, 
        //if your not declare format json in config
         //format: winston.format.json(), 

        //Contoh format log simple 
        //http: HTTP Message
        //debug: Debug Message
        // format: winston.format.simple(),
        
        format: winston.format.printf(info =>{
            return `${new Date()} : ${info.level.toUpperCase()} : ${info.message}`;
        }),
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
