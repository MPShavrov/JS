/*
		7. Добавьте ["Paul", 35] в начало переменной myArray, используя unshift().

		// Setup
		var myArray = [["John", 23], ["dog", 3]];
*/
var myArray = [["John", 23], ["dog", 3]];
myArray.unshift(["Paul", 35]);
for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index])
    
}
