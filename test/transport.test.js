import winston from "winston";
import TransportStream from "winston-transport";



test("Create New Logger With new Transport", () => {

    class MyTransport extends TransportStream{

        constructor(option){
            super(option);
        }

        log(info, next){
            console.log(`${new Date()} : ${info.level.toUpperCase()} : ${info.message}`);
            next();
        }
    }

    const logger = winston.createLogger({
        level : "silly",
        colorize : winston.addColors({ request: 'bold cyan magentaBG' }),
        // format: winston.format.combine(
        //     winston.format.timestamp('YYYY-MM-DD hh:mm:ss'), 
        //     winston.format.ms(), 
        //     winston.format.json(),
        //     winston.format.colorize({
        //         all: true,
        //       })),
        transports: [
           new MyTransport({

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
})