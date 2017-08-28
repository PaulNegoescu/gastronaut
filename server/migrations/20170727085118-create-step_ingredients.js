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
          model: "steps",
          key:   "id"
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      ingredient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "ingredients",
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
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('step_ingredients');
  }
};
