
/**
 * Variables Declaration
 */

/**
 * Events
 */
	  		$(document).ready(function(){
	  			myPoints_js=true;
				init_myPoints();
			});
	  		$("#closeMyPoints").on("click",function(){
	  			setView("category", true, true);
	  		});
/**
 * Functions
 */
			function init_myPoints(){
				var newScore=parseInt(currentScore)+parseInt(selectedScore);
				console.log("newScore"+newScore);
				$(".oldScore").innerHTML(currentScore);
				$(".addScore").innerHTML("+"+selectedScore);
				$(".newScore").innerHTML(newScore.toString());
				
			}
			
			