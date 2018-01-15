const {createLogger, format, transports } =  require('winston');

const logger = creatLogger({
    level: 'info',
    format: format.combine(
        format.splat(),
        format.simple()
    ),

});