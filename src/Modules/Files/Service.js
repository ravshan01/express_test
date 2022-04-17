import fs from 'fs'
import { Model as File } from './index.js'

export default {
  async getOneByName(fileName) {
    return File.findOne({
      where: { name: fileName },
    })
  },

  async createOrEdit(req) {
    const name = req.params.name
    const path = `./static/${name}`
    const type = req.headers['content-type']
    const fileSize = req.headers['content-length']

    let file = await this.getOneByName(name)

    // TODO: обновление модели вынести в отдельный метод
    if (file) {
      file.path = path
      file.type = type
      file.fileSize = fileSize
      file.save()
    }
    if (!file) {
      file = await this.createFile({
        name: name,
        path,
        content_type: type,
        size: fileSize,
      })
    }

    fs.writeFileSync(path, req.rawBody, 'binary', err => console.log(err))
    return file
  },

  async createFile(file) {
    return await File.create(file)
  },
}
