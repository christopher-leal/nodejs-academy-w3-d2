import express from 'express'
import morgan  from 'morgan'
import routes from './src/routes'

const app = express()

app.use(morgan('combined'))

app.use(routes)

app.get('/', (req, res) => {
  res.send({
    message: 'NodeJS Academy w3d2'
  })
})

export default app
