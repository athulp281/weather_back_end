module.exports = (sequelize, DataTypes) => {
    const globalnews = sequelize.define("globalnews", {
        newsTitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        newsImage: {
            type: DataTypes.STRING,
            allowNull: true, // allow null initially since it's not required for text news
        },
    });

    return globalnews;
};
