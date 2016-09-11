
var getMovieData = document.getElementById('button')

	clickerFn = function(but) {

		 return button;
	}

getMovieData.addEventListener('click', clickerFn);


function mySearch() {

	function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}

var request = createCORSRequest("get", "https://api.themoviedb.org/3/movie/550?api_key=0e13e1ef18370c64978fac161d116011");
if (request){
    request.onload = function(){
        console.log(request.responseText)
    };
    request.send();
}
}


var result = {

"adult":false,
"backdrop_path":"/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg",
"belongs_to_collection":null,
"budget":63000000,
"genres":[{"id":18,"name":"Drama"}],
"homepage":"http://www.foxmovies.com/movies/fight-club",
"id":550,
"imdb_id":"tt0137523",
"original_language":"en",
"original_title":"Fight Club",
"overview":"A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
"popularity":4.175572,
"poster_path":"/811DjJTon9gD6hZ8nCjSitaIXFQ.jpg",
"production_companies":[{"name":"Regency Enterprises","id":508},{"name":"Fox 2000 Pictures","id":711},{"name":"Taurus Film","id":20555},{"name":"Linson Films","id":54050},{"name":"Atman Entertainment","id":54051},{"name":"Knickerbocker Films","id":54052}],
"production_countries":[{"iso_3166_1":"DE","name":"Germany"},{"iso_3166_1":"US","name":"United States of America"}],
"release_date":"1999-10-14",
"revenue":100853753,
"runtime":139,
"spoken_languages":[{"iso_639_1":"en","name":"English"}],
"status":"Released",
"tagline":"How much can you know about yourself if you've never been in a fight?",
"title":"Fight Club",
"video":false,
"vote_average":8.1,
"vote_count":5253
}; 


localStorage.setItem('result', JSON.stringify(result));













	







 

