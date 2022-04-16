import fs from 'fs'
import FilesService from './Service'
import SuccessResponse from '../../utils/SuccessResponse'
import ErrorResponse from '../../utils/ErrorResponse'

export default {
  async getFile(req, res) {
    console.log(req.body)
    return res.send(new SuccessResponse(await FilesService.getFile('TEST')))
  },
  async addFile(req, res) {
    req.on('data', function (chunk) {
      req.rawBody += chunk
    })
    req.on('end', function () {
      console.log(req.headers)
      fs.writeFileSync(`./static/${req.params.name}}`, req.rawBody, 'binary', err =>
        console.log(err)
      )
    })
  },
}
