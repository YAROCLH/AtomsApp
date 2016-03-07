
/**
 * Variables Declaration
 */

/**
 * Events
 */
	  		$(document).ready(function(){
	  			myPoints_js=true;
			});

/**
 * Functions
 */
			function init_myPoints(){
				var newScore = parseInt(currentScore) + parseInt(selectedScore);
				document.getElementById("scoreAfter").innerHTML = currentScore;
				document.getElementById("lastNewScore").innerHTML = "+" + selectedScore;
				document.getElementById("finalScore").innerHTML = newScore.toString();
			}
			
			
