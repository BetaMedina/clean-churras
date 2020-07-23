'use strict'

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('UserEvent', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      id_user: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_event: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Event',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      payment_value: {
        allowNull: true,
        type: DataTypes.FLOAT(10, 2)
      },
     
      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserEvent')
  }
}
