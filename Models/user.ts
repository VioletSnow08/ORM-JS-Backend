import * as Sequelize from "Sequelize";
import db from "../Configuration/database"

const user = db.define('user', {
    ID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "firstName is required." },
        },
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "lastName is required." },
        },
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "username is required."}
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "password is required."}
        }
    }
})


user.sync().then(() => {
    console.log('Users Created.');
});

export default user;