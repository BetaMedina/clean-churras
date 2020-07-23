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
        updated_at: DataTypes.DATE
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
    this.hasMany(models.UserEvent, {
      foreignKey: 'id_event',
      as: 'event'
    })
  }
}
module.exports = Event
