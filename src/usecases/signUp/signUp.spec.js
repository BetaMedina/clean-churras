const { SignUp } = require('./signUp')
const makeSut = () => {
  class SignUpUseCaseSut {
    create (payload) {
      return { id: 'validId', ...payload }
    }
  }
  class BcryptCaseSut {
    encrypt (string) {
      return string
    }
  }
  
  const signUpRepoSut = new SignUpUseCaseSut()
  const bcryptSut = new BcryptCaseSut()
  const signUpSut = new SignUp(signUpRepoSut, bcryptSut)
  
  return {
    signUpRepoSut,
    signUpSut
  }
}

let sut
let signUpRepository

describe('SignUp - Test', () => {
  beforeEach(() => {
    const { signUpRepoSut, signUpSut } = makeSut()
    sut = signUpSut
    signUpRepository = signUpRepoSut
  })

  it('Should throw if Repository throws', async () => {
    const payload = {
      body: {
        name: '',
        email: 'validmail@mail.com',
        password: 'validPass',
        passwordConfirmation: 'validPass'
      }
    }
    jest.spyOn(signUpRepository, 'create').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    expect(sut.createNewSignUp(payload.body)).rejects.toThrow()
  })
  it('Should be receveid a new User', async () => {
    const payload = {
      body: {
        name: 'validName',
        email: 'validmail@mail.com',
        password: 'validPass',
        passwordConfirmation: 'validPass'
      }
    }
    const response = await sut.createNewSignUp(payload.body)
    expect(response).toEqual({
      id: 'validId',
      name: 'validName',
      email: 'validmail@mail.com',
      password: 'validPass',
      passwordConfirmation: 'validPass'
    })
  })
})
