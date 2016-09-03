
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
function mySearch() {

	 var xhr = new XMLHttpRequest();

 xhr.open('GET', 'http://finance.i.ua/', true);

 xhr.send();

 if (xhr.status != 200) {

 	alert( xhr.status + ': ' + xhr.statusText );

 } else {

 	alert(xhr.responseText);
 }

}


