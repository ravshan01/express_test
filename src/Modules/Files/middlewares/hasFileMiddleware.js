import { Service as FilesService, Errors } from '../index.js'
import { ErrorResponse } from '../../../utils/index.js'

export default async function hasFileMiddleware(req, res, next) {
  const file = await FilesService.getOneByName(req.params.name)
  if (!file) return res.status(400).json(new ErrorResponse(Errors.FileNotFound.message))

  req.file = file
  next()
}
