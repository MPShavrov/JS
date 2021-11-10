var age = prompt("Сколько вам лет?");
var str;

if (age == 1){
    str = "год";
} else if (age > 1 && age <= 4){
    str = "года";
} else { str = "лет"};

var res = confirm("Ваш возраст " + age + " " + str + "?");

console.log(res);