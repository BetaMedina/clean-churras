
const User = require('../../models/User.model')
const { UserRepository } = require('./UserRepository')
const mysqlHelper = require('../../helpers/mysql.helper')

require('../../models')

const makeSut = () => {
  return new UserRepository()
}
let sut
let user
let event

describe('UserRepository MYSQL Repository', () => {
  beforeEach(async () => {
    await mysqlHelper.mysqlTruncate(User)
    sut = makeSut()

    user = await User.create({
      name: 'validName',
      email: `${new Date().getTime}@mail.com`,
      password: 'hashPass'
    })
  })
 
  it('Should return an account on success', async () => {
    const userEvent = await sut.list('valid')
    expect(userEvent).toBeTruthy()
    expect(userEvent.id_user).toBe(user.id)
    expect(userEvent.id_event).toBe(event.id)
    expect(userEvent.payment_value).toBe(50)
  })
})
