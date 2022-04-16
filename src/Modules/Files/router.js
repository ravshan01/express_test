import { Router } from 'express'
import { Controller } from './index'

const router = Router()
router.get('/:name', Controller.getFile)

export default router
