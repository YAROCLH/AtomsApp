
/**
 * Variables Declaration
 */
	var Status_BackButton;
/**
 * Events
 */
		$(document).ready(function()
		{
			init_status();
		});
/**
 * Functions
 */
		function init_status()
        {
			status_js=true;
			var data_status="idUser="+global_UserId;
			Status_BackButton=$(".ClickBackBad");
			Animate();
		}
		
		$(Status_BackButton).on("click",function()
		{
            setView("badges",badges_js,false);
		});
		
		function Animate()
        {
			var category    = 0;						
		    var percents    = ['percent1', 'percent2', 'percent3', 'percent4', 'percent5'];
		    var data_status = "idUser="+encodeString(global_UserId);
		    
		    var categories, score, newPercent;

			$.when(get_Data(Status_Json,data_status)).then(function(status_data)
            {
			    categories            = status_data;
				var number_categories = categories.length;
                var id                = 0;

				jQuery('.skillbar').each(function()
				{
				    console.log("N categoria         " + category);
				    console.log("N de categoria (id) " + id);
                    
                    if( id >= number_categories || category != categories[id].id - 1)
                    {
                        newPercent = 0;
                    }
                    else
                    {
                        console.log("id de la category   " + categories[id].id);
                        var total = parseInt(categories[id].Total);
                        score       = parseInt(categories[id].Score);
                        newPercent  = score/total * 100; 
                        id++;
                    }
                    
                    newPercent = parseInt(newPercent);   	
                    console.log("newPercent " + newPercent);
                    console.log("\n");

                    document.getElementById(percents[category]).innerHTML =  newPercent + "%";
                    jQuery(this).attr('data-percent', newPercent + "%");

                    jQuery(this).find('.skillbar-bar').animate({
                        width:jQuery(this).attr('data-percent')
                    },3000);
                    
                    category++;
		        });
		    });
		}
