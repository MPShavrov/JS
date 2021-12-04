/*
 1. Сделать собственные примеры методов применяемых для массивов.
*/

// Сумма всех чисел массива:
var arr = [3,2,5,6];
function arraySum(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum += array[i];
    }
    console.log(sum);
}

arraySum(arr);  

// Поиск простых чисел в массиве
var arr = [];
arr.length = +prompt('Enter length of array: ');
for (var i = 2; i <= arr.length; i++) {
    var count = 0;  
    for (var j = 2; j <= i; j++) {
        if (i % j) {continue};
        count += 1;
    }
    if (count == 1) document.write(i);
}