import { Model } from './index.js'

export default function () {
  return Model.sync({ force: true })
}
