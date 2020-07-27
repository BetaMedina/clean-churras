const Yup = require('yup')

const eventValidation = (Payload) => {
  const schema = Yup.object().shape({
    name: Yup
      .string()
      .required(),
    description: Yup
      .string(),
    date: Yup
      .string()
      .required(),
    numberPeople: Yup
      .number(),
    suggestedValue:
    Yup
      .string(),
    obs: Yup
      .string()
  })
  return schema.validate(Payload, { abortEarly: true, stripUnknown: true }).then(res => {
    return false
  }).catch(err => {
    return err.errors.join()
  })
}
module.exports = { EventValidation: eventValidation }
