const router = require('express').Router();
const Anime = rewuire('../../');

router.get('/', async (req, res) => {
    res.render('home');
})
