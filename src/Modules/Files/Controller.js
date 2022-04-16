import FilesService from './Service'
import SuccessResponse from '../../utils/SuccessResponse'
import ErrorResponse from '../../utils/ErrorResponse'

export default {
  async getFile(req, res) {
    // console.log(req)
    return res.send(new SuccessResponse(await FilesService.getFile('TEST')))
  },
  async addFile(req, res) {},
}
