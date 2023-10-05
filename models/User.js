const { Model, DataTypes } = require('sequelize');
const sequelize = require('services/database');
const Run = require('../models/Run');

class User extends Model {}

// Initialize the table
User.init({
    first_name: {
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    tableName: 'users', // THIS IS THE TABLE NAME IN THE DATABASE
    modelName: 'users',
    timestamps: false // CreatedAt and UpdatedAt don't exist in our database
});

module.exports = User;