
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
			$("#relleno").css("height","75px");
		});
		
		$(document).on('click','.main',function(){
			setView("index",menu_js);
		});
		$(document).on('click','.backScore2',function(){
					setView("yourRank",rank_js);
		});
		$(document).on('click','.logout',function(){
			$("#MainBody").load("views/AllViews/login.html");
			isLogin=true;
		});
/**
 * Functions
 */
		function init_menu(){
			menu_js=true;
		}