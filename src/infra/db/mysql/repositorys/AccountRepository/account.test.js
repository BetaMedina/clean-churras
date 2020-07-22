
const User = require('../../models/User.model')
const { AccountRepository } = require('./Account')
const helper = require('../../helpers/mysql.helper')

require('../../models')

const makeSut = () => {
  return new AccountRepository()
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
    await User.create({
      name: 'validName',
      email: 'validMail@mail.com',
      password: 'hashPass'
    })

    const account = await sut.findUserByMail('validMail@mail.com')

    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe('validName')
    expect(account.email).toBe('validMail@mail.com')
    expect(account.password).toBeTruthy()
  })
})
