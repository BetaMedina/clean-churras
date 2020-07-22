const { MissingParamError, UnauthorizedError } = require('../../errors')
const unauthorized = require('../../errors/unauthorized')
const { serverError } = require('../../helpers/httpHelper')
const { LoginController } = require('./logIn')

const makeSut = () => {
  class AuthUseCaseSut {
    async handle (email, password) {
      return 'any_string_token'
    }
  }
  const authUseCaseSut = new AuthUseCaseSut()
  const loginSut = new LoginController(authUseCaseSut)

  return {
    authUseCaseSut,
    loginSut
  }
}
let sut
let authSut

describe('LogIn - Test', () => {
  beforeEach(() => {
    const { authUseCaseSut, loginSut } = makeSut()
    sut = loginSut
    authSut = authUseCaseSut
  })
  it("Should be expected to return error if password don't be send", async () => {
    const payload = {
      body: {
        password: '',
        email: 'validMail@mail.com'
      }
    }
    const httpResponse = await sut.handle(payload)
    expect(httpResponse.statusCode).toBe(400)
    await expect(httpResponse.body).toBeInstanceOf(MissingParamError)
  })
  it("Should be expected to return error if email don't be send", async () => {
    const payload = {
      body: {
        password: '200611037',
        email: ''
      }
    }
    const httpResponse = await sut.handle(payload)
    expect(httpResponse.statusCode).toBe(400)
    await expect(httpResponse.body).toBeInstanceOf(MissingParamError)
  })

  it('Should be authUseCase throw error ', async () => {
    const payload = {
      body: {
        password: '200611037',
        email: 'validMail@medina.com'
      }
    }
    
    jest.spyOn(authSut, 'handle').mockReturnValueOnce(new Promise((resolve, reject) => reject(new UnauthorizedError())))
    const httpResponse = await sut.handle(payload)
    await expect(httpResponse.statusCode).toEqual(500)
  })

  it('Should be return new userToken', async () => {
    const payload = {
      body: {
        password: '200611037',
        email: 'validMail@medina.com'
      }
    }
    const httpResponse = await sut.handle(payload)
    expect(httpResponse.statusCode).toBe(200)
    await expect(httpResponse.body.access_token).toBe('any_string_token')
  })
})
