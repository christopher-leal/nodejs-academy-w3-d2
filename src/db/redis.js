import { createClient } from 'redis'
import logger from '../utils/logger'
import config from 'config'

const redisUrl = config.get('redis.url')

const client = createClient({
  url: redisUrl
})

client.on('error', err => {
  logger.info(`Redis error: ${err}`)
})

export const redisConnection = () => client.connect()

export default client
