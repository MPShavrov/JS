/*
Допишите функцию, которая определит, парное ли число (решение должно быть в одну строку).
		Функция должна вернуть "Even" или "Odd";

		function isEven(num) {
			// your code here
		}
*/

function isEven(num) {
    return(num % 2) == 0 ? "Even" : "Odd";
}

num = +prompt("Enter num:");
alert(isEven(num));
