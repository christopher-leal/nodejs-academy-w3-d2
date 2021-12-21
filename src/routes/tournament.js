import { Router } from 'express'
import startTournament from '../lib/tournament'

const router = Router()

router.get('/', async (req, res) => {
  const teams = await startTournament()
  res.json({
    success: true,
    data: teams
  })
})
export default router
