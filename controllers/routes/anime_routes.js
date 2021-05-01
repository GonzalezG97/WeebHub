const router = require('express').Router();
// this is a representative sample of the return json from our database.
// from the point, the data that has been populated in our database needs to be translated into this format.


const animes = [

    {
        "id": 1,
        "title": "Akira",
        "description": "BadAss",
        "image_link": "",
        "rank": 34,
        "rating": "A+",
    },

    {
        "id": 2,
        "title": "One Punch Man",
        "description": "Neato",
        "image_link": "",
        "rank": 40,
        "rating": "A+",
    },

    {
        "id": 3,
        "title": "Dragon Ball Z",
        "description": "Lame",
        "image_link": "",
        "rank": 70,
        "rating": "C+",
    },
    {
        "id": 4,
        "title": "Vampire Hunter D",
        "description": "Cool Beans",
        "image_link": "",
        "rank": 14,
        "rating": "A+",
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