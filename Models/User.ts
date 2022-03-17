import * as Sequelize from "Sequelize";
const db = require('../Configuration/database.js');

const User = db.define('User', {
    Id: {
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
            notNull: { msg: "Password is required."}
        }
    }
})


User.sync().then(() => {
    console.log('Users Created.');
});

module.exports = User;