import fs from 'fs'
import { Model as File } from './index.js'

export default {
  async getOneByName(fileName) {
    return File.findOne({
      where: { name: fileName },
    })
  },
  async getFileBuffer(file) {
    return await fs.readFileSync(file.path)
  },

  async create(file) {
    return await File.create(file)
  },

  async createOrEdit(req, buffers) {
    const name = req.params.name
    const type = req.headers['content-type']

    // пока так, надо будет вычислять правильное расширение из content-type
    const extension = type.split('/')[1]

    const fileSize = req.headers['content-length']
    const path = `./static/${name}.${extension}`

    let file = await this.getOneByName(name)

    // TODO: обновление модели вынести в отдельный метод
    if (file) {
      file.path = path
      file.type = type
      file.fileSize = fileSize
      file.save()
    }
    if (!file) {
      file = await this.create({
        name: name,
        path,
        content_type: type,
        size: fileSize,
      })
    }

    fs.writeFileSync(path, Buffer.concat(buffers), 'binary', err => console.log(err))
    return file
  },
}
