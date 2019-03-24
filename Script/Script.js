(function () { 
var arrEmoji =['🐭','🐼','🐻','🦊','🐱'];

var arrEllipses = document.querySelectorAll('.ellipse_text'); // нельзя из глобального переместить
var question = document.getElementById('question');
var rules = document.getElementById('rules');
var rulesOk = document.getElementById('rulesOk');
var start = document.getElementById('start');
var pickedEllipse = null; // initially all ellipses are empty, nothing to clear
var scores = document.getElementById('scores_counter');
var mouseCounter = 0;

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
var timerId;

start.onclick = function() {

	mouseCounter = 0;
	scores.innerHTML = mouseCounter;

	clearInterval(timerId); 

	var gameTimer = 1400;
	var speed = document.getElementById('speed_counter');
	var speedCounter = 1;
	speed.innerHTML = speedCounter;
	timerId = setInterval(funcAppearance, gameTimer);
	
	var lifes = document.querySelectorAll('.live');			
	
	lifes.forEach(function(hearts){	
		hearts.style.display = 'block'; 
	});
	console.log(gameTimer);
	var gameoverWindow = document.getElementById('gameover');
	var gameoverOk = document.getElementById('gameoverOk');
	var j = 0;
	// START
	arrEllipses.forEach(function(ellipse) {
		ellipse.onclick = function() {
			if (marker) {
//теоретически, раз я теперь удаляю эмоджу сразу после клика (по коммент Азиза) - можно убрать маркер, но я оставлю, чтобы вы видели, что я научилась такой фишке :)
				if(ellipse.innerHTML == '🐭') { 
					pickedEllipse.innerHTML = '';
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
					pickedEllipse.innerHTML = '';					
					var lifeCounter = 3;
					//console.log(lifes);
					j++;
					lifes[lifeCounter-j].style.display = "none";
					if (lifeCounter-j === 0){
						var scoresAmount = document.getElementById('scores-amount');
						scoresAmount.innerHTML = mouseCounter;						
						gameoverWindow.style.display = "block"; 
						clearInterval(timerId);
						mouseCounter = 0;
						scores.innerHTML = mouseCounter;
						speedCounter = 1;
						speed.innerHTML = speedCounter;
						lifes.forEach(function(hearts){	
							hearts.style.display = 'block'; 
						});
					} 
					gameoverOk.onclick = function() {
						gameoverWindow.style.display = "none"; 
					}	
					console.log(mouseCounter);
				}
				marker = false;
			}
		}
	});
	if (pickedEllipse!==null) {
			pickedEllipse.innerHTML = '';
		}
}
})();