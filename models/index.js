const Anime = require('./Anime');
const Review = require('./Review');
const User = require('./User');
const AnimeTitle = require('./AnimeTitle');
const PosterImage = require('./PosterImage');

Anime.hasMany(Review, {
    foreignKey: 'anime_id'
});
Review.belongsTo(Anime);

Anime.hasOne(AnimeTitle);
AnimeTitle.belongsTo(Anime);

// AnimeTitle.hasOne(Review);
// Review.belongsTo(AnimeTitle);
// Review.hasOne(AnimeTitle);
// AnimeTitle.belongsTo(Review);

Anime.hasOne(PosterImage);
PosterImage.belongsTo(Anime);

User.hasMany(Review);
Review.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = { Anime, User, Review, AnimeTitle, PosterImage }