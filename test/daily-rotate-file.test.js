import dailyRotateFile from "winston-daily-rotate-file";
import winston from "winston";
import { DailyRotateFile } from "winston/lib/winston/transports";

test("Logging with daily rotate file", () => {
    const logger = winston.createLogger({

        transports: [
            new winston.transports.Console({}),
            new DailyRotateFile({
                filename : 'app-%DATE%.log',
                zippedArchive :  true,
                maxSize : '1m',
                maxFiles : '14d'
            })
        ]
    });


    for(let i = 0; i<100000; i++){
        logger.log({
            level : "info",
            message : "Hello Logging"
    
        })
    }
    
})