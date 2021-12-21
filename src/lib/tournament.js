import Team from './../models/team'

const startTournament = async () => {
  const teams = await Team.findAll({})
  const matchesPerTeam = teams.length - 1
  const totalMatches = teams.length * matchesPerTeam
  const matchesPerWeek = 4
  const tournamentWeeks = totalMatches / matchesPerWeek
  const tournamentDate = new Date()
  const tournament = {}
  // const teamsCounter = {}
  for (let i = 0; i < tournamentWeeks; i++) {
    tournament[`Week ${i + 1}`] = []
    for (let j = 0; j < matchesPerWeek; j++) {
      // let randomTeam = Math.floor(Math.random() * teams.length + 1)
      // while(teamsCounter[randomTeam]!==7){

      // }
      const localTeamScore = Math.floor(Math.random() * 6)
      const visitorTeamScore = Math.floor(Math.random() * 6)
      tournament[`Week ${i + 1}`].push({
        localTeamId: teams[j].id,
        visitorTeamId: teams[j].id,
        localTeamScore,
        visitorTeamScore,
        tournamentDate: tournamentDate.toLocaleDateString()
      })
    }
    tournamentDate.setDate(tournamentDate.getDate() + 7)
  }
  return tournament
}

export default startTournament
// for (let i = 0; i < teams.length; i++) {
//   for (let j = 1; j < teams.length - 1; j++) {
//     console.log(teams[i].id, teams[j].id)
//   }
// }
