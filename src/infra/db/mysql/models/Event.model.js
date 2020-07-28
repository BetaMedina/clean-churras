const { DataTypes, Model } = require('sequelize')

class Event extends Model {
  static init (sequelize) {
    super.init(
      {
        
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        suggested_value: DataTypes.FLOAT,
        date: DataTypes.DATE,
        obs: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
        with_drink: DataTypes.TINYINT,
        number_people: DataTypes.INTEGER
      },
      {
        sequelize,
        timestamps: true,
        tableName: 'Event'
      }
    )
    return this
  }

  static associate (models) {
    this.belongsToMany(models.User, {
      through: 'UserEvent',
      as: 'users',
      foreignKey: 'id_event'
    })
  }
}
module.exports = Event
