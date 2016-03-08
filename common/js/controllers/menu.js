
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
			setView("login",true);
		});
/**
 * Functions
 */
		function init_menu(){
			menu_js=true;
		}