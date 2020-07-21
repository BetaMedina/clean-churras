const { MongoHelper } = require('../helpers/mongo.helper')

class SignUpRepository {
  async create (account) {
    const accountCollection = MongoHelper.getCollection('users')
    const newAccount = await accountCollection.insertOne(account)
    return MongoHelper.map(newAccount)
  }
} 

module.exports = { SignUpRepository }
