var num = +prompt("Введите значение 5/10/15/20/25");

switch(num){
    case 5:
        console.log("Tiny");
        break;
    case 10:
        console.log("Small");
        break;
    case 15:
        console.log("Medium");
        break;
    case 20:
        console.log("Large");
        break;
    case 25:
        console.log("Huge");
        break;
    default:
         console.log("вы ввели не валидное значение");
}