module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            },
            unique: true
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
    });

    user.associate = (favorite) => {
        user.belongsToMany(favorite, {
            through: 'UserFavorite'
        });
    };

    return user;
};

