
const User = require('../../models/User.model')
const { SignUpRepository } = require('./SignUp')
const helper = require('../../helpers/mysql.helper')

require('../../models')

const makeSut = () => {
  return new SignUpRepository()
}
let sut

describe('Account MYSQL Repository', () => {
  afterAll(async () => {
    helper.mysqlTruncate(User)
  })

  beforeEach(async () => {
    sut = makeSut()
  })

  it('Should return an account on success', async () => {
    const account = await sut.create({
      name: 'validName',
      email: 'validMail@mail.com',
      password: 'hashPass'
    })
    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe('validName')
    expect(account.email).toBe('validMail@mail.com')
    expect(account.password).toBe('hashPass')
  })
})
