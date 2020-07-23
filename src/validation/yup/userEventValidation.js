const Yup = require('yup')

const userEventValidation = (Payload) => {
  const schema = Yup.object().shape({
    idUser: Yup
      .number()
      .integer()
      .required(),
    idEvent: Yup
      .number()
      .integer()
      .required(),
    paymentValue: Yup
      .string()
  })
  return schema.validate(Payload, { abortEarly: true, stripUnknown: true }).then(res => {
    return false
  }).catch(err => {
    return err.errors.join()
  })
}
module.exports = { UserEventValidation: userEventValidation }
