
const { MongoHelper } = require('../helpers/mongo.helper')
const { SignUpRepository } = require('../signUpRepository/SignUp')

const makeSut = () => {
  return new SignUpRepository()
}
let sut
describe('Account Mongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect()
    sut = makeSut()
  })
  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = MongoHelper.getCollection('accounts')
    accountCollection.deleteMany({})
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
