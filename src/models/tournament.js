import { DataTypes } from 'sequelize'
import sequelize from '../db/postgres'
import Team from './team'

const Tournament = sequelize.define('tournament', {
// Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  localTeamScore: {
    type: DataTypes.INTEGER,
    allowNull: false

  },
  visitorTeamScore: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
})
Tournament.belongsTo(Team, { as: 'localTeamId' })
Tournament.belongsTo(Team, { as: 'visitorTeamId' })

export default Tournament
