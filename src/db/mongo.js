import mongoose from 'mongoose'
import config from 'config'
import logger from './../lib/logger'

const mongoUrl = config.get('mongo.url')

mongoose.connect(mongoUrl, (error) => {
  if (error) return logger.error(error)
  logger.info('Database connected')
})
