import winston, { info } from "winston";

test("Logging with combine format", () => {
    const logger = winston.createLogger({
        level: "debug",
        colorize : winston.addColors({ request: 'bold cyan magentaBG' }),
        format: winston.format.combine(
            winston.format.timestamp('YYYY-MM-DD hh:mm:ss'), 
            winston.format.ms(), 
            winston.format.json(),
            winston.format.colorize({
                all: true,
              })),
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename : "application.log"
            })
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


test("Logging with combine format add colorize", () => {
    const someLogger = winston.createLogger({
        level: "debug",
        format: winston.format.combine(
            winston.format.timestamp({
              format: 'YYYY-MM-DD hh:mm:ss',
            }),
            winston.format.colorize({
              all: true,
            }),
            winston.format.colorize()
          ),
        transports: [
            new winston.transports.Console({})
        ]
    });

someLogger.info({
  method: 'GET',
  message: `-- some/api/route`
})
});
