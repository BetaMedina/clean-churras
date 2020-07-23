class UserEvent {
  constructor ({ idUser, idEvent, paymentValue }) {
    this.id_user = idUser
    this.id_event = idEvent
    this.payment_value = paymentValue
  }
}

module.exports = { UserEvent }
