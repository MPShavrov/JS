/*
		4. Добавьте ["dog", 3] в конец переменной myArray и выведите в консоль.
			Выведите в консоль первый элемент в каждом вложенном массиве.

		// Setup
		var myArray = [["John", 23], ["cat", 2]];
*/

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
for (let index = 0; index < myArray.length; index++) {
    
    console.log(myArray[index]);
}
