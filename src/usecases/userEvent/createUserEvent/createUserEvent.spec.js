const { CreateUserEvent } = require('./createUserEvent')

const makeSut = () => {
  class UserEventRepositorySut {
    create (payload) {
      return { id: 'validId', ...payload }
    }
  }
  
  const userEventRepoSut = new UserEventRepositorySut()
  const userEventSut = new CreateUserEvent(userEventRepoSut)
  
  return {
    userEventRepoSut,
    userEventSut
  }
}

let sut
let userEvenRepository

describe('UserEvent - UseCase', () => {
  beforeEach(() => {
    const { userEventSut, userEventRepoSut } = makeSut()
    sut = userEventSut
    userEvenRepository = userEventRepoSut
  })

  it('Should throw if Repository throws', async () => {
    const payload = {
      body: {
        idEvent: 1,
        idUser: 2,
        paymentValue: '99.99'
      }
    }
    jest.spyOn(userEvenRepository, 'create').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    expect(sut.createNewUserEvent(payload.body)).rejects.toThrow()
  })
  it('Should be receveid a new User Event', async () => {
    const payload = {
      body: {
        idEvent: 1,
        idUser: 2,
        paymentValue: '99.99'
      }
    }
    const response = await sut.createNewUserEvent(payload.body)
    expect(response).toEqual({
      id: 'validId',
      idEvent: 1,
      idUser: 2,
      paymentValue: '99.99'
    })
  })
})
