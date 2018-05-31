const Sequelize = require('sequelize');
const sequelize = new Sequelize('node_crud', 'crud', 'crud_db', {
    host: '172.21.0.2',
    port: 3306,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

module.exports = sequelize;