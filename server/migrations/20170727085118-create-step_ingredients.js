'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('step_ingredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      step_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "steps", // Can be both a string representing the table name, or a reference to the model
          key:   "id"
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      ingredient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "ingredients", // Can be both a string representing the table name, or a reference to the model
          key:   "id"
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      quantity: {
        type: Sequelize.FLOAT
      },
      unit: {
        type: Sequelize.STRING
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('step_ingredients');
  }
};
