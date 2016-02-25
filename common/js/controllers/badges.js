
/**
 * Variables Declaration
 */

/**
 * Events
 */
		$(document).ready(function() {
			init_badges();
		});
		
		$(document).on('click', "#status",function(){
				setView("status", status_js);
		});
  
/**
 * Functions
 */
		function init_badges(){
			badges_js=true;
		}