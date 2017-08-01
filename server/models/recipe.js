'use strict';
module.exports = function(sequelize, DataTypes) {
  var recipe = sequelize.define('recipe', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.STRING,
    cooking_time: DataTypes.STRING,
    cover_image: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // TodoItem.belongsTo(models.Todo, {
        //   foreignKey: 'todoId',
        //   onDelete: 'CASCADE',
        // });
      },
    }
  });

  return recipe;
};
