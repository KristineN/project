
var getMovieData = document.getElementById('button')

	clickerFn = function(but) {

		console.log('Hello world');
	}

getMovieData.addEventListener('click', clickerFn);



function run() {

	var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://www.gismeteo.ua/', true);

xhr.send();

xhr.onreadystatechange = function(but) {
	if (this.readyState  = 4) return;

	if (this.status  = 200) {
		alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
		return;
	
  		}
	}
}
