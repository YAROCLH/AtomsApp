
/* JavaScript content from js/controllers/status.js in folder common */

/**
 * Variables Declaration
 */

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
			
		}
		
		function Animate(){
			 var category    = 0;						// contador para acceder al indice de categorias
		     var totals      = [115, 16, 12, 16, 18];	// constantes del total de puntos de las categorias
		     var percents    = ['percent1', 'percent2', 'percent3', 'percent4', 'percent5'];
		     var data_status ="idUser="+encodeString(global_UserId);//se le debe pasar tambien el nombre de los parametros en este caso el id del user
		     var categories;var score;var newPercent;
			 $.when(get_Data(Status_Json,data_status)).then(function(status_data){
				categories  = status_data;
				var t=categories.length;
				jQuery('.skillbar').each(function(){
				if(category>=t){
					newPercent=0;
					console.log("entre");
				}else{
					console.log(categories[category].Score+"--"+totals[category]);
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