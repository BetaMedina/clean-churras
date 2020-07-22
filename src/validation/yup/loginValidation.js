const Yup = require('yup')

const loginValidation = (Payload) => {
  const schema = Yup.object().shape({
    email: Yup
      .string()
      .email()
      .required(),
    password: Yup
      .string()
      .required()
  })
  return schema.validate(Payload, { abortEarly: true, stripUnknown: true }).then(res => {
    return false
  }).catch(err => {
    return err.errors.join()
  })
}
module.exports = { LoginValidation: loginValidation }
