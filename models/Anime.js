const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Anime extends Model {}

Anime.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'anime',
      }
);

module.exports = Anime;