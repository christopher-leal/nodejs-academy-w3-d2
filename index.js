import logger from "./src/config/winston";
import dotenv from 'dotenv'
import app from './app'

dotenv.config()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`)
})
