module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
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
    });

    User.associate = (models) => {
        User.belongsToMany(models.favorite, {
            through: 'UserFavorite'
        });
    };

    return User;
};

