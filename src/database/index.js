const Sequelize = require ("sequelize");
const databaseConfig = require("../config/database");
const Thought = require("../model/Thought");
const { init } = require("../model/Users");
const Users = require("../model/Users");

const connection = new Sequelize(databaseConfig);

Users.init(connection);
Thought.init(connection);

module.exports = connection; 