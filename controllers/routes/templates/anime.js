const router = require('express').Router();
const sequelize = require('sequelize');
const db = require('./../../../models');
const { Review, User, Anime, PosterImage, AnimeTitle } = require('./../../../models')


router.get('/search', (req, res) => {
    return res.render('animes/singleAnime', { animes: animes });
})


router.get('/reviews', (req, res) => {
    let limit = 100;
    let whereClause = {};
    return Review.findAll({
            limit: limit,
            ...whereClause,
            include: [
                { model: User },
                {
                    model: Anime,
                    include: [
                        { model: PosterImage },
                        { model: AnimeTitle }
                    ]
                }
            ]
        })
        // this converts directly to JSON so that the developer doesn't have to use .dataValues
        .then(results => results.map(record => record.get({ plain: true })))
        // keep the print statement for future development
        // .then(results => { console.log(results[0]); return results })
        .then(reviews => res.render('animes/reviews', { reviews: reviews }))

});

// Goes last since it will catch before other routes are checked
router.get('', (req, res) => {
    let limit = 100;
    let whereClause = {};
    return Anime.findAll({
            limit: limit,
            ...whereClause,
            include: [
                { model: PosterImage },
                { model: AnimeTitle }
            ]
        })
        // this converts directly to JSON so that the developer doesn't have to use .dataValues
        .then(results => results.map(record => record.get({ plain: true })))
        // keep the print statement for future development
        // .then(results => { console.log(results[0]); return results })
        .then(animes => res.render('animes/anime', { animes: animes }))
});



module.exports = router;