
var getMovieData = document.getElementById('button')

	clickerFn = function(but) {

		console.log('search');

			
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

}*/
 function mySearch() {

 	var req = new XMLHttpRequest();

	req.open('GET', 'https://www.gismeteo.ua/', true);
	req.onreadystatechange = function (aEvt) {
		if (req.readyState == 4) {
			if (req.status == 200)
				dump(req.responseText);
			else
				dump("Error loading page\n");
		}
	}
	req.send(null);

 }
document.ready(function({}));