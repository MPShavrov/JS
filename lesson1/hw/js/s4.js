var name1 = prompt("Как вас зовут?");
var surname = prompt("Какая ваша фамилия?");
var age = prompt("Сколько вам лет?");
var str;

if (age == 1){
    str = "год";
} else if (age > 1 && age <= 4){
    str = "года";
} else { str = "лет"};

console.log("Клиенту " + surname + " " + name1 + " " + age + " " + str);