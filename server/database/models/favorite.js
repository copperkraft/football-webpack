module.exports = (sequelize, DataTypes) => {
    const Favorite = sequelize.define('favorite', {
        teamId: {
            type: DataTypes.INTEGER,
            unique: true
        },
        teamName: {
            type: DataTypes.STRING,
            unique: true
        }
    });

    Favorite.associate = (models) => {
        Favorite.belongsToMany(models.user, {
            through: 'UserFavorite'
        });
    };

    return Favorite;
};