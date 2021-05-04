const sequelize = require('../config/connection');
const { User, Anime, Review } = require('../models');
const Kitsu = require('kitsu');

const userData = require('./userData.json');
const reviewData = require('./reviewData.json');

const api = new Kitsu();

const seed = async () => {

  const pageOffsets = [0, 20, 40, 60, 80, 100];
  const newAnimeData = [];

  try {

    await sequelize.sync({ force: true });

    // get anime data by pageoffsets
    for (const offset of pageOffsets) {
      const reqAnimeData = await api.get('anime', {
        params: {
          fields: {
            anime: 'id,slug'
          },
          page: {
            limit: 20, 
            offset
          }
        }
      });
      
      const reformatedAnimeData = [];
      // reformats anime data bc sparse fieldset returns extra data
      for (const anime of reqAnimeData.data) {
        reformatedAnimeData.push({
          id: anime.id,
          slug: anime.slug
        });
      };

      newAnimeData.push(...reformatedAnimeData);
    };

    await Anime.bulkCreate(newAnimeData);
    
    const newAnimeCount = await Anime.count();
    console.log(`${newAnimeCount} anime added!`);
    await User.bulkCreate(userData, {
      individualHooks: true,
    });

    const newUserCount = await User.count();
    console.log(`${newUserCount} users added!`);
    // insert random user reviews for random animes
    for (const review of reviewData) {
      const randAnimeId = getRandomInt(1, newAnimeCount);
      const randUserId = getRandomInt(1, newUserCount);

      console.log({
        ...review,
        user_id: randUserId,
        anime_id: randAnimeId
      });

      await Review.create({
        ...review,
        user_id: randUserId,
        anime_id: randAnimeId
      });

    };

    process.exit(0);
    
  } catch (err) {
    console.log(err);
  }
  
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

seed();

