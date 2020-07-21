const { DataTypes, Model } = require('sequelize')

class User extends Model {
  static init (sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING
      },
      {
        sequelize,
        timestamps: true,
        tableName: 'User'
      }
    )
    return this
  }
}
module.exports = User
