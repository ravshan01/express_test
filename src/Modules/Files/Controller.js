import FilesService from './Service.js'
import { SuccessResponse, ErrorResponse } from '../../utils/index.js'

export default {
  async getFile(req, res) {
    const fileBuffer = await FilesService.getFileBuffer(req.file)

    res.header('Content-Type', req.file.content_type)
    return res.send(fileBuffer)
  },

  async addFile(req, res) {
    const buffers = []

    req.on('data', function (chunk) {
      buffers.push(chunk)
    })
    req.on('end', async function () {
      const file = await FilesService.createOrEdit(req, buffers)
      return res.json(new SuccessResponse({ file }))
    })
  },
}
