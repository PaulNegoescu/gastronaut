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
      step_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "steps",
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
