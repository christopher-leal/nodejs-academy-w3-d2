import { Router } from 'express'
import tournamentRouter from './tournament'

const router = Router()

router.use('/tournament', tournamentRouter)

export default router
