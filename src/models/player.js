import { DataTypes } from 'sequelize'
import sequelize from '../db/postgres'
import Team from './team'

const Player = sequelize.define('player', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  speed: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  stamina: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  mentality: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  control: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
})

Player.belongsTo(Team)

export default Player
