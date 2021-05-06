const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Anime extends Model {}

const designRequestedExample = {
    "id": 1,
    'titles': {
        "en": "Cowboy Bebop",
        "ja_jp": "カウボーイビバップ",
    },
    'averageRating': '88.55',
    'startDate': '1998-04-03',
    'endDate': '1999-04-24',
    'ageRatingGuide': '17+ (violence & profanity)',
    'posterImage': {
        'tiny': 'https://media.kitsu.io/anime/poster_images/1/tiny.jpg?1431697256',
        'small': 'https://media.kitsu.io/anime/poster_images/1/small.jpg?1431697256',
        'medium': 'https://media.kitsu.io/anime/poster_images/1/medium.jpg?1431697256',
        'large': 'https://media.kitsu.io/anime/poster_images/1/large.jpg?1431697256',
        'original': 'https://media.kitsu.io/anime/poster_images/1/original.jpg?1431697256',
    },
    'synopsis': 'In the year 2071, humanity has colonoized several of the planets and moons...',
    'episodeCount': 26,
    'episodeLength': 25,
}

Anime.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        averageRating: {
            type: DataTypes.DECIMAL
        },
        startDate: {
            type: DataTypes.DATE
        },
        endDate: {
            type: DataTypes.DATE
        },
        ageRatingGuide: {
            type: DataTypes.STRING
        },
        synopsis: {
            type: DataTypes.TEXT
        },
        episodeCount: {
            type: DataTypes.INTEGER
        },
        episodeLength: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'anime',
    }
);

module.exports = Anime;