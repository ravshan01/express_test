import { Router } from 'express'
import { Controller, middlewares } from './index.js'

const router = Router()
router.get('/:name', middlewares.hasFileMiddleware, Controller.getFile)
router.put('/:name', Controller.addFile)

export default router
