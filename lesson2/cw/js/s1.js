var num = +prompt("Введите число от 0 до 100");
if(num < 5 ){
    console.log("Tiny");
} else if(num < 10){
    console.log("Small");
}else if(num < 15){
    console.log("Medium");
}else if(num < 20){
    console.log("Large");
}else if(num >= 20){
    console.log("Huge");
}
