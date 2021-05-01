const router = require('express').Router();
// this is a representative sample of the return json from our database.
// from the point, the data that has been populated in our database needs to be translated into this format.

const animes = [

    {
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
    },

    {
        "id": 2,
        'titles': {
            "en": "Jo Mama",
            "ja_jp": "一つな",
        },
        'averageRating': '80.55',
        'startDate': '2000-02-03',
        'endDate': '2007-09-19',
        'ageRatingGuide': '14+ (violence)',
        'posterImage': {
            'tiny': 'https://media.kitsu.io/anime/poster_images/1/tiny.jpg?1431697256',
            'small': 'https://media.kitsu.io/anime/poster_images/1/small.jpg?1431697256',
            'medium': 'https://media.kitsu.io/anime/cover_images/000/010/857/original/tumblr_nrqg5brAx31ta0h4lo1_1280.jpg',
            'large': 'https://media.kitsu.io/anime/poster_images/1/large.jpg?1431697256',
            'original': 'https://media.kitsu.io/anime/poster_images/1/original.jpg?1431697256',
        },
        'episodeCount': 13,
        'episodeLength': 25,
    },
    {
        "id": 2,
        'titles': {
            "en": "Big",
            "ja_jp": "つな",
        },
        'averageRating': '35.43',
        'startDate': '1992-01-09',
        'endDate': '1999-09-19',
        'ageRatingGuide': 'TV-G',
        'posterImage': {
            'tiny': 'https://media.kitsu.io/anime/poster_images/1/tiny.jpg?1431697256',
            'small': 'https://media.kitsu.io/anime/poster_images/1/small.jpg?1431697256',
            'medium': 'https://media.kitsu.io/anime/cover_images/000/010/857/original/tumblr_nrqg5brAx31ta0h4lo1_1280.jpg',
            'large': 'https://media.kitsu.io/anime/poster_images/1/large.jpg?1431697256',
            'original': 'https://media.kitsu.io/anime/poster_images/1/original.jpg?1431697256',
        },
        'episodeCount': 10,
        'episodeLength': 25,
    },

    {
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
    },

    {
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
    },

];

router.get('/', async(req, res) => {
    res.render('home');
})
router.get('/anime/:num', async(req, res) => {
    return res.render('singleAnime', animes[req.params.num - 1]);
    // this 
});
router.get('/anime', async(req, res) => {
    return res.render('anime', { animes: animes })
});


console.log('anime rules')

module.exports = router;