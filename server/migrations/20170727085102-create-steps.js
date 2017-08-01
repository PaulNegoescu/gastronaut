'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('steps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      recipe_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "recipes", // Can be both a string representing the table name, or a reference to the model
          key:   "id"
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      instructions: {
        type: Sequelize.TEXT
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('steps');
  }
};
