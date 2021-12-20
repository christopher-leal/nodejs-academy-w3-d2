import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost:5432/postgres`)

const connect = async () => {
  try {
    console.log(process.env)
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
connect()
export default sequelize
