import * as Sequelize from "Sequelize";
import db from "../Configuration/database"

const User = db.define('User', {
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
            notNull: { msg: "userName is required."}
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


User.sync().then(() => {
    console.log('Users Created.');
});

export default User;