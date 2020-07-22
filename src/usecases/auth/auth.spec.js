const { UnauthorizedError } = require('../../presentation/errors/unauthorized')
const { Auth } = require('./auth')

const makeSut = () => {
  class AccountRepository {
    async findUserByMail () {
      return {
        id: 'validId',
        name: 'validName',
        email: 'validMail@gmail.com',
        password: 'hashPass'
      }
    }
  }
  class BcryptCaseSut {
    compare (string, hash) {
      return string === hash
    }
  }
  class JwtAdapterSut {
    encrypt (id) {
      return 'any_string_token'
    }
  }
  const RepositorySut = new AccountRepository()
  const BcryptSut = new BcryptCaseSut()
  const jwtAdapterSut = new JwtAdapterSut()
  const AuthSut = new Auth(RepositorySut, BcryptSut, jwtAdapterSut)
  return {
    RepositorySut,
    AuthSut,
    BcryptSut,
    jwtAdapterSut
  }
}

let sut
let repositorySut
let bcryptSut
let jwtSut

describe('Auth - Use Case', () => {
  beforeEach(() => {
    const { AuthSut, RepositorySut, BcryptSut, jwtAdapterSut } = makeSut()
    sut = AuthSut
    repositorySut = RepositorySut
    bcryptSut = BcryptSut
    jwtSut = jwtAdapterSut
  })

  it('Should be search user per email and return error if not exists', async () => {
    jest.spyOn(repositorySut, 'findUserByMail').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    await expect(sut.handle('validMail@gmail.com', 'anyPassword')).rejects.toThrow()
  })

  it('Should be search user if password does not match', async () => {
    jest.spyOn(bcryptSut, 'compare').mockReturnValueOnce(new Promise((resolve, reject) => reject(new UnauthorizedError())))

    await expect(sut.handle('validMail@gmail.com', 'anyPassword')).rejects.toThrow()
  })
  it('Should be return a new token', async () => {
    const useCaseResponse = await sut.handle('validMail@gmail.com', 'hashPass')
    await expect(useCaseResponse).toBe('any_string_token')
  })
})
