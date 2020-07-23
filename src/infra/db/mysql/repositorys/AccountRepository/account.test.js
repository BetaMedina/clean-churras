
const User = require('../../models/User.model')
const { AccountRepository } = require('./Account')
const helper = require('../../helpers/mysql.helper')

require('../../models')

const makeSut = () => {
  return new AccountRepository()
}
let sut

describe('Account MYSQL Repository', () => {
  beforeEach(async () => {
    await helper.mysqlTruncate(User)
    sut = makeSut()
  })

  it('Should return an account on success', async () => {
    await User.create({
      name: 'validName',
      email: 'mailaccount@mail.com',
      password: 'hashPass'
    })

    const account = await sut.findUserByMail('mailaccount@mail.com')

    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe('validName')
    expect(account.email).toBe('mailaccount@mail.com')
    expect(account.password).toBeTruthy()
  })
})
