//1) создай 6 переменный разных типов,

var num = 1234556; //тип number
var str = 'Hello world!'; // string
var boo = true; // boolean
var und = undefined; // undefined
var zero = null; // null
var newOb = {name: 'Alisa'}; // object

//2) напишы 6 операцый сравнения любых и результаты запиши в переменные, помни про названия переменных, 

var resMore = 5>3; //true
var resPar = 5==5; //true
var resUnder = 9<7; // false
var notEqual = 8 != 7; // true
var par = undefined = null; // true
var simile = 2 === 'bla'; // false - разные типы

//3) приведи число в строку, - используем бинарный "+";

5 + '2'; // '52' 
'60' + 9; // '609'

//4) приведи строку в число,  - используем унарный "+"

+5; //5

var apple = '10';
var straw = '8';
+apple + +straw; // 18.. т.к. унарный + преобразует строки в числа, а бинарный их додаст 


//1) приведи строку в логический тип так чтоб вышло один раз тру один раз фолс, 
console.log( !!'bla bla'); // true

console.log( !!''); // false

//2) приведи число в логический тип тоже чтоб один раз вышло тру второй фолс, 
//все результать приведения запиши в переменные и выводи консоль логом.

console.log( !!2); // true

console.log( !!0);// false

// 1) напиши цикл вайл с условием (a < 10) при каждой итерации отнимай от переменной а 2 так чтоб было 5 итераций, 
var a = 0; 
 while (a < 10) {
 	console.log(a);
 	a = a+2;
 }

//2) напиши цикл ду вайл, 

var a = 0;
do {
	console.log(a);
	a++;
} while (a<6);

//3) обьясни в чем разница между вайл и ду вайл, - 
разница в том, разница между вайл и ду вайл в том ,
 что когда вайл.. пока условие у нас верно..то есть тру, то код из тела выполняется... 
 в ду вайл.. в начале мы выполняем условие, а уже потом проверяем условие

//4) напиши цыкло фор с пропуском частей чтоб он работал как вайл тоесть бес создание переменной и прибавления к этой переменной 1, 
var a = 0;

for(; a>10;){

	console.log(a)
}

//5) напиши цыкл фор который будет итерироваться по каждому елементу масива и выводить его в консоль лог, 
var names = ["anna", "alisa", "nik", "ira"];
for(var i=0; i<4; i++) {
	console.log(names[i]);
}

//6) напиши цыкл фор который будет итерироваться по каждому 2ому елементу масива, масив создай сама и заполни чем хочеш,
var names = ["anna", "alisa", "nik", "ira", "olga", "vasia"];

for(i=0; i<=6; i++) {
  if (i % 2 == 1) {
    console.log(names[i]);  
  };
  }

/*7) создай масив чисел, цыклом проитерируйся по нему и найди в нем чило 100500 (оно конешно же должно быть в масиве, и не последним елементом)
 когда найдеш число выйди из цыкла что больше не было итераций.

var number = ['10', '20', '5', '100500', '8', '6'];
var num = 100500;
 while (true) {
  var value = ("bla");
  if (!value) break; // (*)
  number += value;
}
console.log( num );
/*for( var calc=0; calc<6; calc++){
	var value = ('100500');
		if(!value) break;
		number += value;
}
console.log(number);*/

//8) напиши цыкл фор который будет итерироваться по масиву чисел, смотреть или число кратное 2, есле да тогда пусть выведет его в консоль, есле нето то пусть выйдет из текущей итерации (это континю), 

for (var i = 0; i < 10; i++) {

  if (i % 2 == 1) continue;

  alert(i);
}



//1) что такое оператор "или" обьясни и напиши 4 примера его использования с 4 разнымим типами данных, 

//"или" запинается на правде, как только при выполнении условий, будет найдено 
//true - оперетор останавливается 
console.log(null || 2 || undefined); // 2
console.log('bla' || 2 || undefined); // 'bla'
console.log(false || null || 12345); // 12345
console.log(true|| 254 || false); // true


/*&& "и"- запинается на лжи... как только будет найдено false , то есть 
вычесляются операнды с лева на право до первого фолс и возвратит его, 
если же все будут true тогда вернет последнее значение*/

console.log(254 && null && true); // null
console.log(false && 123 && undefined); // false
console.log(true && 123 && 'bla'); // 'bla' - последнее значение

//! "не" - возвращает противоположное значение, перед этим приводит к логическому типу (true/false) 
console.log(!true) // false
console.log(!false) //true



SWITCH 
// группировка 
var b = 3 + 3;

switch (b) {
	case 6:
		alert('правильно');
		break;

	case 5:
	case 7:
	case 8:
		alert('и так тоже нет');
		alert('НАКОНЕЦ');
		alert('NOOOO');
		break;

	default:
		alert( 'I dont now');
}


var a = +prompt('a?', '');

switch (a) {
	case 0:
	console.log(0);
	break;

	case 1:
	console.log(1);
	break;

	case 2:
	case 3:

console.log(2,3);
break;
}