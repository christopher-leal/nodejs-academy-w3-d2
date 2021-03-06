import { createClient } from 'redis'
import logger from '../config/logger'

const client = createClient({
  url: 'redis://localhost:6379'
})

client.on('error', err => {
  logger.info(`Redis error: ${err}`)
})

export default client
