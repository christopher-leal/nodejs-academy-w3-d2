import { Router } from 'express'
import factorialRouter from './factorial'

const router = Router()

router.use('/factorial', factorialRouter)

export default router
