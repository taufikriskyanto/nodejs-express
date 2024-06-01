import winston from "winston";

const logger = winston.createLogger({
        level : "info",
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                handleExceptions : true,
                filename : "exception.log"
            }),
            new winston.transports.File({
                handleRejections : true,
                filename : "rejections.log"
            })
        ]
    });

    hello();
    callAsync();