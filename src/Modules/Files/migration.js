import { Model } from './index'

export default function () {
  Model.sync({ force: true })
}
