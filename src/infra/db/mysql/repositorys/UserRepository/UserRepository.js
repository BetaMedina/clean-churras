const { Op } = require('sequelize')
const User = require('../../models/User.model')

class UserRepository {
  async find (user) {
    return User.findAll({
      where: {
        name: {
          [Op.like]: `%${user}%`
        }
      },
      attributes: ['name', 'id']
    })
  }
} 

module.exports = { UserRepository }
