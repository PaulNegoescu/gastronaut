'use strict';
module.exports = function(sequelize, DataTypes) {
  var ingredients = sequelize.define('ingredients', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: DataTypes.STRING
  });

  return ingredients;
};
