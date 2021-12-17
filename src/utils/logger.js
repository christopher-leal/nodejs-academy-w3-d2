import winston from 'winston'

import { argv } from 'yargs'

const createLogger = loggerService => {
  return {
    info: (message) => {
      loggerService.info(message)
    },
    error: (message) => {
      loggerService.error(message)
    },
    warn: (message) => {
      loggerService.warn(message)
    }
  }
}

const debugFlag = argv.debug

let loggerService

switch (debugFlag) {
  case 'winston':
    loggerService = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      transports: [
        new winston.transports.Console({ format: winston.format.combine(winston.format.colorize(), winston.format.simple()) }),
        new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: './logs/combined.log' })
      ]
    })

    break
  case 'console':
    loggerService = console
    break

  default:
    loggerService = ({
      info: () => {},
      error: () => {},
      warn: () => {}
    })
    break
}

const logger = createLogger(loggerService)
module.exports = logger
