
/* JavaScript content from js/controllers/status.js in folder common */

/**
 * Variables Declaration
 */
	var Status_BackButton;
/**
 * Events
 */
		$(document).ready(function(){
			init_status();
		});
/**
 * Functions
 */
		function init_status(){
			status_js=true;
			var data_status="idUser="+global_UserId;
			Status_BackButton=$(".ClickBackBad");
			Animate();
			
		}
		
		$(Status_BackButton).on("click",function(){
			  setView("badges",badges_js,false);
		});
		
		function Animate(){
			 var category    = 0;						
		     var totals      = [115, 16, 12, 16, 18];	
		     var percents    = ['percent1', 'percent2', 'percent3', 'percent4', 'percent5'];
		     var data_status ="idUser="+encodeString(global_UserId);
		     var categories;var score;var newPercent;
			 $.when(get_Data(Status_Json,data_status)).then(function(status_data){
				categories  = status_data;
				var t=categories.length;
				jQuery('.skillbar').each(function(){
				if(category>=t){
					newPercent=0;
				}else{
					score=parseInt(categories[category].Score);
					newPercent =score/totals[category] * 100; 
				}
					newPercent=parseInt(newPercent);   	
		            document.getElementById(percents[category]).innerHTML =  newPercent.toString() + "%";
		            jQuery(this).attr('data-percent', newPercent.toString() + "%");
		            jQuery(this).find('.skillbar-bar').animate({
		                width:jQuery(this).attr('data-percent')
		            },3000);
		            
		            category++; 
		        });
		    });
		}