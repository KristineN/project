
var getMovieData = document.getElementById('button')

	clickerFn = function(but) {

		 return mySearch();
	}

getMovieData.addEventListener('click', clickerFn);


/*function search() {

	var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://www.gismeteo.ua/', true);

xhr.send(null);

xhr.onreadystatechange = function() {
	if (this.readyState  == 4) return;



	if (this.status  == 200) {
		alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
		return;

		alert(xhr.onreadystatechange);
   }

}

}
 function mySearch() {

 	var req = new XMLHttpRequest();

	req.open('GET', 'http://finance.i.ua/', true);

	req.onreadystatechange = function () {

		if (req.readyState == 4) {
			if (req.status == 200)
				dump(req.responseText);
			else
				dump("Error loading page\n");

			req.send(null);
				(document).ready(function() {});

document.getElementById('button').onclick = function mySearch();

		}

	}

	console.log('function');

 }*/

 Access-Control-Allow-Origin 
function mySearch() {

	 var xhr = new XMLHttpRequest();

	 xhr.withCredentials = true;

 xhr.open('GET', 'http://finance.i.ua/', true);

 xhr.send();

 if (xhr.status != 200) {

 	alert( xhr.status + ': ' + xhr.statusText );

 } else {

 	alert(xhr.responseText);
 }

}

// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Safari/Firefox.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
  // bibliographica.org supports CORS.
  var url = 'http://bibliographica.org/';

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);
    alert('Response from CORS request to ' + url + ': ' + title);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}
