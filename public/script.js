const token = process.env.apiToken
const userSearch = document.getElementById('searchInput').value().toLowerCase();
const searchButton = document.getElementById('searchButton');
const urlSearch = encodedURIComponent(userSearch);
const animeList = 'https://kitsu.io/api/edge/anime';
const animeCategories = `https://kitsu.io/api/edge/anime?filter%5Bcategories%5D=${selectedCategory}`;






// user types anime in search bar
// clicks searchButton
    // try to match the anime with our db
    // if does not exist in db, api call that anime into the db
// pull the information for anime 
// 
// 
// 
// 
// 
// 
// 