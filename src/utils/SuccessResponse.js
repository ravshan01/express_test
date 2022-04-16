export default class SuccessResponse {
  constructor(payload) {
    this.result = payload || {}
    this.error = false
  }
}
