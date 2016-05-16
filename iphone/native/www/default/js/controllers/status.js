
/* JavaScript content from js/controllers/status.js in folder common */

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
		    
		    var categories, score, newPercent, total, total_badge;

			$.when(get_Data(Badges_Json)).then(function(badges_data)
            {
                var badges_points = [badges_data[0].L1, badges_data[0].L2, badges_data[0].L3, badges_data[0].L4];

                $.when(get_Data(Status_Json,data_status)).then(function(status_data)
                {
                    categories            = status_data;
                    var number_categories = categories.length;
                    var id                = 0;

                    jQuery('.skillbar').each(function()
                    {
                        total_badge = parseInt(badges_points[0]);

                        if( id >= number_categories || category != categories[id].id - 1)
                        {
                            newPercent  = 0;
                            score 	    = 0;
                        }
                        else
                        {
                            total         	  = parseInt(categories[id].Total);
                            score             = parseInt(categories[id].Score);

                            var prev_badge    = 0;
                            var prev_score    = 0;
                            var badge_total   = 0;

                            if(score > badges_points[badges_points.length - 1])
                            {
                                newPercent = 100;
                                total_badge = parseInt(badges_points[badges_points.length - 1]);
                            }
                            else
                            {
                                for(var i = 0; i < badges_points.length; i++)
                                {
                                	total_badge  = parseInt(badges_points[i]);
                                    var badge    = parseInt(badges_points[i]);
                                    badge_total += badge; 
                                    

                                    if( i > 0)
                                    {
                                        prev_badge += parseInt(badges_points[i - 1]);
                                    }

                                    if( score < badge )
                                    {
                                        // prev_score = score - prev_badge;

                                        //newPercent = prev_score/badge * 100; 
                                        newPercent = score/badge * 100;
                                        break;
                                    }
                                    else if(score == badge)
                                    {
                                        newPercent = 0;
                                        break;
                                    }
                                }
                            }
                            id++;
                        }
                        
                        newPercent = (newPercent > 100) ? 100: parseInt(newPercent);
                        
                        /*
                        if(score>=136)
                    	{
                   			document.getElementById(percents[category]).innerHTML =  "136/136";
                    	}
                        else 
                		{
                			document.getElementById(percents[category]).innerHTML =  score + "/" + total_badge;
                		}
                		*/
                        
                        document.getElementById(percents[category]).innerHTML =  score + "/" + total_badge;
                        
                        jQuery(this).attr('data-percent', newPercent + "%");

                        jQuery(this).find('.skillbar-bar').animate({
                            width:jQuery(this).attr('data-percent')
                        },3000);
                        
                        category++;
                    });
                });
            });
		}
