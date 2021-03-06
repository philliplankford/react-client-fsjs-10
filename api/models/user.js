'use strict'; // opt in to restricted "strict" variant of JS. 
// strict and non strict code can coexist 

// STRICT MODE CHANGES: 
// eliminate JS silent errors -> throw errors
// can be made to run faster than normal code 
// prohibits some syntax

const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize) => {
    class User extends Model { // ES6 Syntax
        static associate(models) {
           User.hasMany(models.Course, {
               foreignKey: {
                   fieldName: 'userId',
                   allowNull: false,
                   validate: {
                       notNull: {
                           msg: 'A user ID is required.'
                       },
                       notEmpty: {
                           msg: 'Please provide a user ID'
                       }
                   }
               },
           }) 
        }
    };
    User.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'A first name is required.',
                },
                notEmpty: {
                    msg: 'Please provide a first name.',
                },
            },
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'A last name is required.',
                },
                notEmpty: {
                    msg: 'Please provide a last name.',
                },
            },
        },
        emailAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: 'That email is already in use!',
            },
            validate: {
                notNull: {
                    msg: 'An email is required.',
                },
                notEmpty: {
                    msg: 'Please provide an email.',
                },
                isEmail: { // built in email check
                    msg: 'Please provide a valid email.',
                },
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'A password is required.',
                },
                notEmpty: {
                    msg: 'Please provide a password.',
                },
            },
        }, 
    }, { 
        hooks: {
            afterValidate: async (user) => {
                user.password = await bcrypt.hashSync(user.password, 10);
            }
        },
        sequelize });
    return User;
};