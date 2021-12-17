import { Router } from 'express'
import Todo from './../models/todo'
import logger from './../lib/logger'
import validateFields from '../middleware/validateFields'
import { body } from 'express-validator'
import client from './../db/redis'
const router = Router()

router.get('/', async (req, res) => {
  try {
    const cachedTodos = await client.get('todos')
    if (cachedTodos) {
      logger.info('here')
      return res.status(200).json({
        success: true,
        data: JSON.parse(cachedTodos)
      })
    }
    const todos = await Todo.find({}).populate('userId', 'email')
    await client.set('todos', JSON.stringify(todos))

    return res.status(200).json({
      success: true,
      data: todos
    })
  } catch (error) {
    logger.error(error.message)
    return res.status(500).json({
      success: false,
      error: error.message
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const todo = await Todo.findById(id).populate('userId', 'email')
    return res.status(200).json({
      success: true,
      data: todo
    })
  } catch (error) {
    logger.error(error.message)
    return res.status(500).json({
      success: false,
      error: error.message
    })
  }
})

router.post('/', [
  body('title').notEmpty().withMessage('Title is required'),
  body('desc').notEmpty().withMessage('Description is required'),
  body('userId').notEmpty().withMessage('User ID is required'),
  validateFields
], async (req, res) => {
  try {
    const todo = new Todo(req.body)
    await todo.save()
    await client.del('todos')
    return res.status(201).json({
      success: true,
      data: todo
    })
  } catch (error) {
    logger.error(error.message)
    return res.status(500).json({
      success: false,
      error: error.message
    })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true })
    return res.json({
      success: true,
      data: todo
    })
  } catch (error) {
    logger.error(error.message)
    return res.status(500).json({
      success: false,
      error: error.message
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const todo = await Todo.findByIdAndDelete(id)
    return res.json({
      success: true,
      data: todo
    })
  } catch (error) {
    logger.error(error.message)
    return res.status(500).json({
      success: false,
      error: error.message
    })
  }
})

export default router
