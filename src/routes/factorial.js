import { Router } from 'express'
import factorial from '../lib/factorial'
import client from '../db/redis'
import logger from '../utils/logger'

const router = Router()

/**
 * 1. if factorial(n) is in redis: return redis.get(factorial, 'n')
 * 2. else factorial(n)
 */

router.get('/:n', async (req, res) => {
  const { n } = req.params
  // TODO: validation
  logger.info(typeof n)
  logger.info(Number.MAX_VALUE)

  await client.connect()

  let result = await client.get(n)
  logger.info(`previous result: ${result}`)

  if (!result) {
    result = factorial(parseInt(n))

    await client.set(n, result)

    // await client.set('tokenstring', JSON.stringify({ valid: true, exp: 123443243, user: 'hiram e. perez'}))
  }

  client.quit()
  return res.json({
    message: `The factorial of ${n} is ${result}`
  })
})

export default router
