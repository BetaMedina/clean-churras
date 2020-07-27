'use strict'

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.addColumn('Event', 'number_people',
      {
        type: DataTypes.INTEGER,
        defaultValue: 1
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Event', 'number_people')
  }
}
