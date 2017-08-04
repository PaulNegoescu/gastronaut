'use strict';
module.exports = function(sequelize, DataTypes) {
  var picture = sequelize.define('picture', {
    recipe_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "recipe",
        key: "id"
      }
    },
    is_cover: DataTypes.BOOLEAN,
    path: DataTypes.STRING
  });

  return picture;
};
