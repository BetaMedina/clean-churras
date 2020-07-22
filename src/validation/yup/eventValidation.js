const Yup = require('yup')

const eventValidation = (Payload) => {
  const schema = Yup.object().shape({
    name: Yup
      .string()
      .required(),
    description: Yup
      .string()
      .required(),
    date: Yup
      .date()
      .required(),
    obs: Yup
      .string()
      .required()
  })
  return schema.validate(Payload, { abortEarly: true, stripUnknown: true }).then(res => {
    return false
  }).catch(err => {
    return err.errors.join()
  })
}
module.exports = { EventValidation: eventValidation }
