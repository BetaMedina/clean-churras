const { UserFind } = require('./findUser')
const makeSut = () => {
  class UserRepository {
    find () {
      return { id: 'any_valid_id' }
    }
  }
  
  const userRepoSut = new UserRepository()
  const userSut = new UserFind(userRepoSut)
  
  return {
    userRepoSut,
    userSut
  }
}

let sut
let userRepository
describe('User - Test', () => {
  beforeEach(() => {
    const { userRepoSut, userSut } = makeSut()
    sut = userSut
    userRepository = userRepoSut
  })

  it('Should throw if Repository throws', async () => {
    jest.spyOn(userRepository, 'find').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    expect(sut.findUser()).rejects.toThrow()
  })
  it('Should be receveid a new Event', async () => {
    const response = await sut.findUser()
    expect(response).toEqual({
      id: 'any_valid_id'
    })
  })
})
