'use strict'

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('Event', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      description: {
        allowNull: true,
        type: DataTypes.STRING
      },
      suggested_value: {
        allowNull: true,
        type: DataTypes.FLOAT(10, 2)
      },
      date: {
        allowNull: false,
        type: DataTypes.DATE
      },
      obs: {
        allowNull: true,
        type: DataTypes.STRING
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
    return queryInterface.dropTable('Event')
  }
}
