const { LoginValidation } = require('./yup/loginValidation')
const { SignUpValidation } = require('./yup/signInValidation')
const { UserEventValidation } = require('./yup/userEventValidation')

module.exports = {
  LoginValidation,
  SignUpValidation,
  UserEventValidation
}
