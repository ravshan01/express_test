import { Router } from 'express'
import { Controller } from './index.js'

const router = Router()
router.get('/:name', Controller.getFile)
router.put('/:name', Controller.addFile)

export default router
