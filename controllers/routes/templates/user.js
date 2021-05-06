const router = require('express').Router();

user = [{

        "id": 1,
        "username": "PhatMan",
        "email": "megadood@aol.com",
        "points": 23

    },
    {
        "id": 2,
        "username": "Senpai",
        "email": "roflcopter@aol.com",
        "points": 26

    },
    {
        "id": 3,
        "username": "8up",
        "email": "cool@aol.com",
        "points": 46

    },
    {
        "id": 4,
        "username": "Anime_Master",
        "email": "babblingCreek@aol.com",
        "points": 09

    },
]

router.get('/register', (req, res) => {
    res.render('user/register');
});

// router.post('/register', (req, res) => {

// })

module.exports = router;