
/* JavaScript content from js/controllers/menu.js in folder common */

/**
 * Variables Declaration
 */

/**
 * Events
 */
		$(document).ready(function(){
			init_menu();
			$("#UserName").text(global_UserName);
		});
		
		$(document).on('click','.main',function(){
			setView("index",menu_js);
		});
  
/**
 * Functions
 */
		function init_menu(){
			menu_js=true;
		}