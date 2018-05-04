const Sequelize = require('sequelize');
var model = require('../db/sql-model');

const User = model.define('users', {
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    }
    
}, {timestamps: false});

module.exports = User;