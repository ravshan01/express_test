import { Model } from './index.js'

export default function () {
  Model.sync({ force: true })
}
