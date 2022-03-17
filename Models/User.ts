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
            notNull: { msg: "FirstName is required." },
        },
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "LastName is required." },
        },
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "UserName is required."}
        }
    },
    password: {
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

export default User;