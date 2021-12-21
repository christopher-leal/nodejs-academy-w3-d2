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
  },
  tournamentDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
}, {
})
Tournament.belongsTo(Team, { as: 'localTeam' })
Tournament.belongsTo(Team, { as: 'visitorTeam' })

export default Tournament
