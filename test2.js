var i = 'Hello world!';

for(n = 0; n<12; n++) {

	console.log(i(n));
}

--------------------------------------------------------
 1)Приведи строку в число  "лох"

 parseInt('лох');



 //2)Округлить 3.55555

 console.log( Math.ceil(3.55555));  // 4 - округляет вверх
 console.log( Math.floor(3.55555)); // 3 - округляет вниз
 console.log( Math.round(3.55555));  // 4 - округляет до ближайшего целого


 //3)Напиши условие которое проверяет если в строке "лолололох" слово "лох"

 var str = 'лолололох';
 var target = 'лох';

 var pos = 0;
 while(true) {
 	var searchPos = str.indexOf(target, pos);
 	if(searchPos == -1) break;

 	console.log(searchPos);
 	pos = searchPos + 1;
 }

var str = 'лолололох';

if (~str.indexOf("лох")) {
	console.log('нашли Лоха');
}

 //4)Найди индекс вхождения "лох" у строке тойже

var str = 'лолололох';
console.log(str.indexOf('лох'));



//5)Замени в той же строке слово "лох" на "бык"
console.log('лолололох'.substring(0, 6) + 'бык');

x = 'лолололох';
console.log(x.replace('лох', 'бык'));

