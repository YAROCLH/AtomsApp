
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
				console.log(currentScore+" | "+selectedScore);	
				var newScore=parseInt(currentScore)+parseInt(selectedScore);
				console.log("newScore"+newScore);
				$(".oldScore").text(currentScore);
				$(".addScore").text("+"+selectedScore);
				$(".newScore").text(newScore.toString());
				
			}
			
			