module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define('team', {
        teamId: {
            type: DataTypes.INTEGER
        },
        teamName: {
            type: DataTypes.STRING
        }
    });

    Team.associate = (models) => {
        Team.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Team;
};