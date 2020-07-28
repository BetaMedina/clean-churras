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

  static associate (models) {
    this.belongsToMany(models.Event, {
      through: 'UserEvent',
      as: 'events',
      foreignKey: 'id_user'
    })
  }
}
module.exports = User
