import fs from 'fs'
import FilesService from './Service.js'
import { SuccessResponse, ErrorResponse } from '../../utils/index.js'

export default {
  async getFile(req, res) {
    const fileBuffer = await fs.readFileSync(req.file.path)

    console.log(req.file)
    res.sendFile(req.file.path, { root: './' })
    // return res.json(new SuccessResponse({ file: req.file }))
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
