import { Router } from 'express'
import factorialRouter from './factorial'
import usersRouter from './users'
import todosRouter from './todos'

const router = Router()

router.use('/factorial', factorialRouter)
router.use('/users', usersRouter)
router.use('/todos', todosRouter)

export default router
