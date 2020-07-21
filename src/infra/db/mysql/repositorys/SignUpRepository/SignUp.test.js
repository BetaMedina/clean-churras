
const Users = require('../../models/User.model')
const { SignUpRepository } = require('./SignUp')

const makeSut = () => {
  return new SignUpRepository()
}
let sut
describe('Account MYSQL Repository', () => {
  // afterAll(async () => {
  //   Users.truncate()
  // })

  beforeEach(async () => {
    // Users.truncate()
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
