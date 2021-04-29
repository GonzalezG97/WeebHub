const Anime = require('./Anime');
const Review = require('./Review');
const User = require('./User');

Anime.hasMany(Review, {
    foreignKey: 'anime_id'
});

User.hasMany(Review, {
    foreignKey: 'user_id'
});

Review.belongsTo(User, {
    foreignKey: 'user_id'
});