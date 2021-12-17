import { Router } from 'express'
import User from './../models/user'
import logger from './../lib/logger'
import validateFields from '../middleware/validateFields'
import { body } from 'express-validator'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await User.find({})
    return res.status(200).json({
      success: true,
      data: users
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
    const user = await User.findById(id)
    return res.status(200).json({
      success: true,
      data: user
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
  body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Email have to have email@email.com format'),
  body('name').notEmpty().withMessage('Name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('password').notEmpty().withMessage('Password is required'),
  validateFields
], async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    return res.status(201).json({
      success: true,
      data: user
    })
  } catch (error) {
    logger.error(error.message)
    return res.status(500).json({
      success: false,
      error: error.message
    })
  }
})

router.put('/:id', [
  body('email').exists().optional().isEmail().withMessage('Email have to have email@email.com format'),
  validateFields
], async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findByIdAndUpdate(id, req.body, { new: true })
    return res.json({
      success: true,
      data: user
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
    const user = await User.findByIdAndDelete(id)
    return res.json({
      success: true,
      data: user
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
