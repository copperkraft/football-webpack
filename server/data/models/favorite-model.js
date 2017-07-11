module.exports = (sequelize, DataTypes) => {
    const favorite = sequelize.define('favorite', {
        teamId: {
            type: DataTypes.INTEGER,
            unique: true
        },
        teamName: {
            type: DataTypes.STRING,
            unique: true
        }
    });

    favorite.associate = (user) => {
        favorite.belongsToMany(user, {
            through: 'UserFavorite'
        });
    };

    return favorite;
};