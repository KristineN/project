
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

var request = createCORSRequest("get", "https://openexchangerates.org/api/currencies.json");
if (request){
    request.onload = function(){
        console.log(request.responseText)
    };
    request.send();
}
}







	







 

