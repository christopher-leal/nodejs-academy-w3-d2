import express from 'express'
import morgan from 'morgan'
import routes from './routes'
import cors from 'cors'
import helmet from 'helmet'
import { redisConnection } from './db/redis'
const app = express()

app.use(morgan('tiny'))
app.use(cors())
app.use(helmet())
app.use(express.json())

app.use(routes)

redisConnection()

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'NodeJS Academy w3d3'
  })
})

export default app
