var sum = 0;
var arr = [];
for(let i = 1; i <= 3; i++){
    var num = +prompt("введите число " + i);
    arr[i-1] = num;
}

if(arr[0] === arr[1] || arr[1] === arr[2] || arr[0] === arr[2]){
    alert("Ошибка");
}else{

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    sum += arr[i];
 }

let sumA = sum / arr.length;
 alert(sumA);
}