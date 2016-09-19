/*1) напиши функцию простую в которой реализован свич кейс, он берет параметр переданый функции, и проверяет его тип, 
в свич кейсе должно быть 6 кейсов, есле какойто кейс будет тру тогда выведи переменную которую получила, 
например есле твоя функция получила строку она дожна свич кейсом узнать узнать какого типа переменная 
и вывести ее консоль логом + тип */


function newKey(boom) {

	bla = typeof boom;            

 switch (bla) {


 	case 'number':
 		console.log('это цbферки');
 		break;
 	case "boolean":
 		console.log('bOoOol');
 		break;
 	case 'string':
 		console.log('gooood');
 		break;
 	case "object":
 		console.log('maybe');
 		break;
 	case "object":
 		console.log('не нужен бъект');
 		break;
 	default:
 		console.log('хренотенюшка')

 }
}

newKey(123);                   // вызываю ф-цию и передаю ей что-то..






/*2) создай 2 переменныйх числовых, опиши функцию которая будет брать из вне эти две переменных, 
добавлять к 2 переменным числовым которые у нее описаны внутри и выводит консоль лог с суммой всех 4 чисел*/

var numb = 5;
var n = 2; 

function sumNumber() {

	var numm = 5;
	var newNum = 10;

var number = numb + n + numm + newNum;

console.log( number );

}

//3) создай функцию которая получает другую функцию как аргумент и вызывает ее, 
//функцию которая передана как аргумент должна уметь выводить консоль лог


var newFun = function() {

	return('hi');

};

function otherFun() {

	//var sayHi = 'bonjour';

	newFun();
}
console.log(newFun());




//4) создай функцию которая будет выводить консоль лог только есле ей передано 3 параметра 
//и они все есть числами используй && 

function showParam(one, two, three) {

	var typeOne = typeof one;
	var typeTwo = typeof two; 
	var typeThree = typeof three;
	
	if (( typeOne === 'number') && ( typeTwo === 'number') && ( typeThree === 'number')) {

			console.log('good');

	} else {

	 	    console.log('foooo');
	} 

 }
		
showParam('bla');

//5) создай функцию которая будет принимать обьект как параметр или масив, 
//есле передан обьект или масив выведи консоль лог что все ништяк, есле другой тип передат выведи еррор


function typeMas(myarray) {      

var arrayType = typeof myarray;       

	if (arrayType === 'object' ) {	

		 console.log("Good boy"); 			

	} else {													

			console.log( "This is bullshit!");    
	}

}

typeMas({name: 'Olga'});  
	

