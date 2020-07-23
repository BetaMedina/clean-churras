const { DeleteUserEvent } = require('./deleteUserEvent')

const makeSut = () => {
  class UserEventRepositorySut {
    destroy (payload) {
      return true
    }
  }
  
  const userEventRepoSut = new UserEventRepositorySut()
  const userEventSut = new DeleteUserEvent(userEventRepoSut)
  
  return {
    userEventRepoSut,
    userEventSut
  }
}

let sut
let userEventRepository

describe('Delete User Event - UseCase', () => {
  beforeEach(() => {
    const { userEventSut, userEventRepoSut } = makeSut()
    sut = userEventSut
    userEventRepository = userEventRepoSut
  })

  it('Should throw if Repository throws', async () => {
    const payload = {
      body: {
        idEvent: 1,
        idUser: 2,
        paymentValue: '99.99'
      }
    }
    jest.spyOn(userEventRepository, 'destroy').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    expect(sut.deleteUserOnEvent(payload.body)).rejects.toThrow()
  })
  it('Should be receveid a new User Event', async () => {
    const payload = {
      body: {
        idEvent: 1,
        idUser: 2
      }
    }
    const response = await sut.deleteUserOnEvent(payload.body)
    expect(response).toBe(true)
  })
})
