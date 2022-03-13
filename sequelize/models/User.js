const Sequelize = require('sequelize');
const db = require('../database');

const User = db.define('User', {
    ID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    FirstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "FirstName is required." },
        },
    },
    LastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "LastName is required." },
        },
    },
    UserName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "UserName is required."}
        }
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "UserName is required."}
        }
    }
})


User.sync().then(() => {
    console.log('Users Created.');
});

module.exports = User;