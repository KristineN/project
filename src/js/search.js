
var getMovieData = document.getElementById('button')

	clickerFn = function(but) {

		console.log('search');

			return search();
	}

getMovieData.addEventListener('click', clickerFn);





function search() {

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
 