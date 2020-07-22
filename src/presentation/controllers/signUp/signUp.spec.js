const { SignUpController } = require('./signUp')
const { MissingParamError } = require('../../errors')

const makeSut = () => {
  class SignUpUseCaseSut {
    async createNewSignUp (payload) {
      return payload 
    }
  }
  const signUpUseCaseSut = new SignUpUseCaseSut()
  const signUpSut = new SignUpController(signUpUseCaseSut)

  return {
    signUpUseCaseSut,
    signUpSut
  }
}

let sut
let createNewSignUp
describe('SignUp - Test', () => {
  beforeEach(() => {
    const { signUpUseCaseSut, signUpSut } = makeSut()
    sut = signUpSut
    createNewSignUp = signUpUseCaseSut
  })

  it('Should be receveid erro if wrong name', async () => {
    const payload = {
      body: {
        name: '',
        email: 'validmail@mail.com',
        password: 'validPass',
        passwordConfirmation: 'validPass'
      }
    }
    const httpResponse = await sut.handle(payload)
    await expect(httpResponse.statusCode).toBe(400)
    await expect(httpResponse.body).toBeInstanceOf(MissingParamError)
  })
  it('Should be receveid erro if wrong email ', async () => {
    const payload = {
      body: {
        name: 'validName',
        email: '',
        password: 'validPass',
        passwordConfirmation: 'validPass'
      }
    }
    const httpResponse = await sut.handle(payload)
    await expect(httpResponse.statusCode).toBe(400)
    await expect(httpResponse.body).toBeInstanceOf(MissingParamError)
  })
  it('Should be receveid erro if wrong confirmation is pass ', async () => {
    const payload = {
      body: {
        name: 'validName',
        email: 'validmail@mail.com',
        password: '',
        passwordConfirmation: ''
      }
    }
    const httpResponse = await sut.handle(payload)
    await expect(httpResponse.statusCode).toBe(400)
    await expect(httpResponse.body).toBeInstanceOf(MissingParamError)
  })
  it('Should be receveid erro if invalid passwordConfirm have been pass ', async () => {
    const payload = {
      body: {
        name: 'validName',
        email: 'validmail@mail.com',
        password: 'validPassword',
        passwordConfirmation: ''
      }
    }
    const httpResponse = await sut.handle(payload)
    await expect(httpResponse.statusCode).toBe(400)
    await expect(httpResponse.body).toBeInstanceOf(MissingParamError)
  })
  it('Should be receveid success ', async () => {
    const payload = {
      body: {
        name: 'validName',
        email: 'validmail@mail.com',
        password: 'validPassword',
        passwordConfirmation: 'validPassword'
      }
    }
    const httpResponse = await sut.handle(payload)
    await expect(httpResponse.statusCode).toBe(200)
    await expect(httpResponse.body).toEqual({
      email: 'validmail@mail.com',
      name: 'validName',
      password: 'validPassword'
    })
  })
  it('Should be throw new error ', async () => {
    const payload = {
      body: {
        name: 'validName',
        email: 'validmail@mail.com',
        password: 'validPassword',
        passwordConfirmation: 'validPassword'
      }
    }
    jest.spyOn(createNewSignUp, 'createNewSignUp').mockImplementationOnce(() => {
      throw new Error()
    })
    const httpResponse = await sut.handle(payload)
    await expect(httpResponse.statusCode).toBe(500)
    await expect(httpResponse.body).toBeInstanceOf(Error)
  })
})
