import { DataTypes } from 'sequelize'
import sequelize from './../db/postgres'

const Team = sequelize.define('team', {
// Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  }
}, {
})

export default Team
