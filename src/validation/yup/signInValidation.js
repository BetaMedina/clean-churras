const Yup = require('yup')

const signUpValidation = (Payload) => {
  const schema = Yup.object().shape({
    email: Yup
      .string()
      .email()
      .required(),
    name: Yup
      .string()
      .required(),
    password: Yup
      .string()
      .required(),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  })
  return schema.validate(Payload, { abortEarly: true, stripUnknown: true }).then(res => {
    return false
  }).catch(err => {
    return err.errors.join()
  })
}
module.exports = { SignUpValidation: signUpValidation }
