module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        birthDate: {
            type: DataTypes.DATEONLY
        },
        password: {
            type: DataTypes.STRING,
        },
        salt: {
            type: DataTypes.STRING
        }
    })
};

