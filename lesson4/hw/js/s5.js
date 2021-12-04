/*
Создать игру "Камень-Ножницы-Бумага".
        Выбор компьютера определяется строкой:  
		
		var computerChoice = Math.random();
		alert(computerChoice);
		
		let comp = getComputerChoice();
		let user = getUserChoice();
		function game(comp, user) {
			
		}

        Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
		Запросить у пользователя один из трех вариантов "Камень-Ножницы-Бумага"
		Сравнить ответ пользователя и компьютера, определить кто выиграл (или ничья)
		Спросить пользователя, хочет ли он повторить, если "да", запустить игру заново
*/

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function play() {
    do {
        pcChoice = getRandomInt(0, 3);

        switch (pcChoice) {
            case 0: 
                alert("stone!");
                break;
            case 1:
                alert("scissors!");
                break;
            case 2:
                alert("paper!");
                break;
            default:
                alert("Something wrong!");
        }
        question = confirm("Another one?");
    } while (question);
}

play();