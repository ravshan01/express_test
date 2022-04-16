export default class ErrorResponse {
  constructor(message) {
    this.error = true
    this.message = message || "Необработанная ошибка"
  }
}
