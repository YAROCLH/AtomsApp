
/* JavaScript content from js/controllers/menu.js in folder common */

/**
 * Variables Declaration
 */
		var menu_Pic;
/**
 * Events
 */
		$(document).ready(function(){
			init_menu();
			$("#UserName").text(global_UserName);
			$("#relleno").css("height","75px");
			menu_Pic=$("#UserPicture");
		});
		
		$(document).on('click','.main',function(){
			setView("index",menu_js);
		});
		$(document).on('click','.rulesGo',function(){
			setView("rules",menu_js);
		});
		$(document).on('click','.backScore2',function(){
					setView("yourRank",rank_js);
		});
		$(document).on('click','.logout',function(){
			setView("login",true);
		});
/**
 * Functions
 */
		function init_menu(){
			menu_js=true;
		}
		


		
		
		