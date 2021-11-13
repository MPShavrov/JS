var a = 2;
var b =7;
var count = b - a;
var sum = 0;

for(let i = 1; i < count; i++){
sum += a++
if(a%2 === 1){
    console.log("f = " + a)
    continue;
}
}
console.log(sum)