'use strict'

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.addColumn('Event', 'with_drink',
      {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Event', 'with_drink')
  }
}
