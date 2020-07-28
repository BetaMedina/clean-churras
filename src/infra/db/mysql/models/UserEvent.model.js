const { DataTypes, Model } = require('sequelize')

class UserEvent extends Model {
  static init (sequelize) {
    super.init(
      {
        id_user: DataTypes.INTEGER,
        id_event: DataTypes.INTEGER,
        payment_value: DataTypes.FLOAT
      },
      {
        sequelize,
        timestamps: true,
        tableName: 'UserEvent'
      }
    )
    return this
  }
}
module.exports = UserEvent
