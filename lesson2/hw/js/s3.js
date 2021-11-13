var arr = [];
for(let i = 1; i <= 3; i++){
    var num = +prompt("введите число " + i);
    arr[i-1] = num;
}
if(arr[0] >= arr[1] && arr[0] >= arr[2]){
    alert("Большее число " + arr[0])
}else if(arr[1] >= arr[0] && arr[1] >= arr[2]){
    alert("Большее число " + arr[1])
}else if(arr[2] >= arr[0] && arr[2] >= arr[1]){
    alert("Большее число " + arr[2])
}