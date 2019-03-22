
//Шаг 2. 🐭🐼🐻🦊🐱 Появление emoji в случайной норке и обработка клика по emoji.
//Вывод информации о emoji в консоль. 

var arrEmoji =['🐭','🐼','🐻','🦊','🐱'];
// var arrEllipses = [ellipseOne, ellipseTwo, ellipseThree, ellipseFour, ellipseFive];

var arrEllipses = document.querySelectorAll('.ellipse_text'); // нельзя из глобального переместить
//console.log(arrEllipses)
var question = document.getElementById('question');
var rules = document.getElementById('rules');
var rulesOk = document.getElementById('rulesOk');
var start = document.getElementById('start');
var pickedEllipse = null; // initially all ellipses are empty, nothing to clear

function funcAppearance() {
	marker = true;
	if (pickedEllipse!==null) {
		pickedEllipse.innerHTML = '';
	}
	
	var emojiRandom = Math.round(Math.random() * (arrEmoji.length-1) );
	var ellipseRandom = Math.round(Math.random() * (arrEllipses.length-1) );
	// remember picked ellipse for next function call
	
	pickedEllipse = arrEllipses[ellipseRandom];
	pickedEllipse.innerHTML = arrEmoji[emojiRandom];
}

question.onclick = function() {
	rules.style.display = "block"; 
}
rulesOk.onclick = function() {
	rules.style.display = "none"; 
}

var marker = true;

start.onclick = function() {
	var gameTimer = 2000;
	var timerId = setInterval(funcAppearance, gameTimer);

	var speedCounter = document.getElementById('speed_counter');	
	speedCounter = 1;

	var gameoverWindow = document.getElementById('gameover');
	var gameoverOk = document.getElementById('gameoverOk');

	var scores = document.getElementById('scores_counter');
	var mouseCounter = 0;

	var speed = document.getElementById('speed_counter');
	var speedCounter = 1;

	var j = 0;
	// START
	//for (var ellipse of arrEllipses) {
		//function funcClosure(ellipse) {
	arrEllipses.forEach(function(ellipse) {
		ellipse.onclick = function() {
			if (marker) {
				if(ellipse.innerHTML == '🐭') { 
						// if(event.target.innerHTML == '🐭') { //второй вариант решения (в function 'event')
					mouseCounter+=10;
					scores.innerHTML = mouseCounter;
					console.log('Заработано очков:' + mouseCounter);
					
					if (mouseCounter % 50 === 0) {
						speedCounter+=1;
						console.log('Уровень сложности игры:' + speedCounter);
						speed.innerHTML = speedCounter;
						clearInterval(timerId); 
						var indexTimer = 1;
						indexTimer -= 0.1;
						timerId = setInterval(funcAppearance, gameTimer*indexTimer);
						console.log('Скорость игры:' + gameTimer*indexTimer);
					}				
				} else {
					var lifes = document.querySelectorAll('.live');
					var lifeCounter = 3;
					//console.log(lifes);
					j++;
					lifes[lifeCounter-j].style.display = "none";
					if (lifeCounter-j === 0){
						var scoresAmount = document.getElementById('scores-amount');
						scoresAmount.innerHTML = mouseCounter;						
						gameoverWindow.style.display = "block"; 
						clearInterval(timerId);

					} 
					gameoverOk.onclick = function() {
						gameoverWindow.style.display = "none"; 
					}	
					console.log(mouseCounter);
				}
				marker = false;
			}

		}
		
		// if (!wasAnimalClicked) {
			//funcClosure(ellipse);
		//}
		//}
	//}
	// END
	});
}