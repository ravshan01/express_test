import FilesService from './Service.js'
import { SuccessResponse, ErrorResponse } from '../../utils/index.js'

export default {
  async getFile(req, res) {
    console.log(req.body)
    return res.json(new SuccessResponse(await FilesService.getOneByName('TEST')))
  },
  async addFile(req, res) {
    req.on('data', function (chunk) {
      req.rawBody += chunk
    })
    req.on('end', async function () {
      const file = await FilesService.createOrEdit(req)
      return res.json(new SuccessResponse({ file }))
    })
  },
}
