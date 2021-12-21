import faker from 'faker'
import { seed } from './src/db/postgres'
import Team from './src/models/team'
import Player from './src/models/player';

(async () => {
  try {
    await seed()
    for (let i = 0; i < 8; i++) {
      const team = await Team.create({
        name: faker.name.title()
      })
      for (let j = 0; j < 11; j++) {
        await Player.create({
          name: faker.name.firstName(),
          speed: Math.floor(Math.random() * 6),
          stamina: Math.floor(Math.random() * 6),
          mentality: Math.floor(Math.random() * 6),
          control: Math.floor(Math.random() * 6),
          teamId: team.id
        })
      }
    }
  } catch (error) {
    console.log(error)
  }
})()
