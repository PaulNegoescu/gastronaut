'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    userName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  user.sync({force: true}).then(() => {
    // Table created
    return user.create({
      userName: 'John.Hancock',
      firstName: 'John',
      lastName: 'Hancock'
    });
  });

  user.sync({force: true}).then(() => {
    // Table created
    return user.create({
      userName: 'jane.smith',
      firstName: 'Jane',
      lastName: 'Smith'
    });
  });

  return user;
};
