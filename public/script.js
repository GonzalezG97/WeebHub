// const token = process.env.apiToken
// const userSearch = document.getElementById('searchInput').value().toLowerCase();
// const searchButton = document.getElementById('searchButton');
// const urlSearch = encodedURIComponent(userSearch);
// const animeList = 'https://kitsu.io/api/edge/anime';
// const animeCategories = `https://kitsu.io/api/edge/anime?filter%5Bcategories%5D=${selectedCategory}`;


   
 
$(document).ready( () => {
    $('#searchButton').click( () => {
        
        const urlSearch = encodeURIComponent($('#searchInput').val().toLowerCase());

        $.ajax({
            url: `https://kitsu.io/api/edge/anime/?filter[text]=${urlSearch}`,
            dataType: 'json',
            success: (response) => {
                let animeList = response.data;
                // console.log(animeList);
                for (const anime of animeList){
                    console.log(anime);
                }
            }
        })
    });

    
});







// user types anime in search bar
// clicks searchButton
    // send request to our server to see if we have the anime
    // if does not exist in our db
        // call third party api to bring the ID and name of that anime
        // format that information
            // Send post request to our server to add the anime info to our DB        
// Send a fetch request with the anime name and Id from DB
// Call third party API to render Anime information
// 
// 
// 
