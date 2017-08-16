'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('pictures', {
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
      is_cover: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      path: {
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
    return queryInterface.dropTable('pictures');
  }
};
