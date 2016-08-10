/**
 * Variables
 */

		var selectedCatego;
		$(document).ready(function() {
			before_js=true;
			init_beforeCategories();
		});
/**
 * Functions
 */		
		function init_beforeCategories(){
			loadJS("category", category_js);//load the category js
		}
		
	