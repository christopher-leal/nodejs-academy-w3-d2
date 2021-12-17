import logger from './utils/logger'
import dotenv from 'dotenv'
import app from './app'

dotenv.config()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`)
})
