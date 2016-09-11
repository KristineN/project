 
var value = localStorage.getItem("result");



var parsedValue = JSON.parse(localStorage.getItem("result"));

console.log(parsedValue)


//for ( name in parsedValue) {

//	console.log(parsedValue)
//};



for ( title in result) {

	console.log("result." + title + " = " + result[title])
};