
var getMovieData = document.getElementById('button')

	clickerFn = function(but) {

		 return button;
	}

getMovieData.addEventListener('click', clickerFn);


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

/*function mySearch() {
	 var xhr = new XMLHttpRequest();
	 xhr.withCredentials = true;
 xhr.open('GET', 'https://query.yahooapis.com/v1/public/yql?q=select+*+from+yahoo.finance.xchange+where+pair+=+%22USDRUB,EURRUB%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=', true);
 xhr.send();
 xhr.onreadystatechange = function() {
  if (xhr.readyState != 4) return;
 if (xhr.status != 200) {
 	alert( xhr.status + ': ' + xhr.statusText );
 } else {
 	alert(xhr.responseText);
 }
}*/

/*function mySearch() {

	var xhr = new XMLHttpRequest();

  xhr.withCredentials = true;

 xhr.open('GET', 'https://query.yahooapis.com/v1/public/yql?q=select+*+from+yahoo.finance.xchange+where+pair+=+%22USDRUB,EURRUB%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=', true);

 xhr.send();

xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };

}*/


/*function clickCounter() {

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

var request = createCORSRequest("get", "https://www.cbr.ru/scripts/XML_daily.asp?date_req=02/03/2002");
if (request){
    request.onload = function(){
        console.log(request.responseText)
    };
    request.send();
}

}*/

/*function addScript(src) {
  var elem = document.createElement("script");
  elem.src = src;
  document.head.appendChild(elem);
}

addScript('https://query.yahooapis.com/v1/public/yql?q=select+*+from+yahoo.finance.xchange+where+pair+=+%22USDRUB,EURRUB%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=');


function clickCounter() {

	var JSONP = function(global){
    // (C) WebReflection Essential - Mit Style
	// 216 bytes minified + gzipped via Google Closure Compiler
    function JSONP(uri, callback) {
        function JSONPResponse() {
            try { delete global[src] } catch(e) {
                // kinda forgot < IE9 existed
                // thanks @jdalton for the catch
                global[src] = null
            }
            documentElement.removeChild(script);
            callback.apply(this, arguments);
        }
        var
            src = prefix + id++,
            script = document.createElement("script")
        ;
        global[src] = JSONPResponse;
        documentElement.insertBefore(
            script,
            documentElement.lastChild
        ).src = uri + "=" + src;
    }
    var
        id = 0,
        prefix = "__JSONP__",
        document = global.document,
        documentElement = document.documentElement
    ;
    return JSONP;
}(this);	

JSONP("https://query.yahooapis.com/v1/public/yql?q=select+*+from+yahoo.finance.xchange+where+pair+=+%22USDRUB,EURRUB%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function (a, b, c) {
  this.document.body.innerHTML += [
   a, b, ++many, c
  ].join(" ") + "<br />";
 })
}*/
	







 

