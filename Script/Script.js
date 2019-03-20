
//Шаг 2. 🐭🐼🐻🦊🐱 Появление emoji в случайной норке и обработка клика по emoji.
//Вывод информации о emoji в консоль. 

var arrEmoji =['🐭','🐼','🐻','🦊','🐱'];
// var arrEllipses = [ellipseOne, ellipseTwo, ellipseThree, ellipseFour, ellipseFive];

var arrEllipses = document.querySelectorAll('.ellipse_text');
//console.log(arrEllipses)

setTimeout(function () {
	var pickedEllipse = null; // initially all ellipses are empty, nothing to clear

	function funcAppearance() {
		if (pickedEllipse!==null) {
			pickedEllipse.innerHTML = '';
		}
		
		var emojiRandom = Math.round(Math.random() * (arrEmoji.length-1) );
		var ellipseRandom = Math.round(Math.random() * (arrEllipses.length-1) );
		// remember picked ellipse for next function call
		
		pickedEllipse = arrEllipses[ellipseRandom];
		pickedEllipse.innerHTML = arrEmoji[emojiRandom];
	}
  setInterval(funcAppearance, 1500);
}, 100);

function funcOnclicks() {
	var speedCounter = document.getElementById('speed_counter');	
	var lifes = document.querySelectorAll('.live');
	//console.log(lifes);
	var gameoverWindow = document.getElementById('gameover');
	var gameoverOk = document.getElementById('gameoverOk');

	speedCounter = 1;
	var mouseCounter = 0;
	var lifeCounter = 3;
	var j = 0;

	for (var ellipse of arrEllipses) {
		function funcClosure(ellipse) {
			ellipse.onclick = function() {
				console.log('Кликнули по ' + ellipse.innerHTML)			
			}
		}
		funcClosure(ellipse);
	}
}
funcOnclicks();

				//закомментированные наработки по следующим шагам
				// if(ellipse.innerHTML == '🐭') { 
				// // if(event.target.innerHTML == '🐭') { //второй вариант решения (в function 'event')
				// 	mouseCounter+=1;
				// } else {

					// j++;
					// lifes[lifeCounter-j].style.display = "none";		
					// 	if (lifeCounter-j === 0){
					// 		gameoverWindow.style.display = "block"; 
					// 	} 
					// 	gameoverOk.onclick = function() {
					// 		gameoverWindow.style.display = "none"; 
					// 	}	
				// }	