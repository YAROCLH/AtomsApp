
/**
 * Variables Declaration
 */

/**
 * Events
 */
		$(document).ready(function() {
			init_badges();
            // setBadgePercentage();
		});
		
		$(document).on('click', "#status",function(){
		    setView("status", status_js);
		});
  
/**
 * Functions
 */
		function init_badges(){
			badges_js=true;
            setBadgePercentage();
		}
        

        /*
         *
         *
         **/
        function setBadgePercentage()
        {
			$.when(get_Data(Badges_Json)).then(function(badges_data)
            {
                var badges_points = [badges_data[0].L1, badges_data[0].L2, badges_data[0].L3, badges_data[0].L4];
                // var badges_points = [];
                // for (var i in badges_data[0]) {
                //     badges_points.push(i);
                // }

                var data_status = "idUser="+encodeString(global_UserId);
                var categories, score, newPercent;
                
                $.when(get_Data(Status_Json,data_status)).then(function(status_data)
                {
                     categories           = status_data;
                    var number_categories = categories.length;
                    var category          = 0;
                    var catID_counter     = 0;

                    var catID             = ['#Cat1', '#Cat2', '#Cat3', '#Cat4', '#Cat5' ];
                    jQuery('.title5').each(function()
                    {
                        var id = categories[category].id; 
                        var total = parseInt(categories[category].Total);
                        if( category >= number_categories )
                        {
                            newPercent = 0;
                            score      = 0;
                        }
                        else
                        {
                            score           = parseInt(categories[category].Score);
                            var badge_total = 0; 
                            var prev_badge  = 0;
                            
                            
                            for(var i = 0; i < badges_points.length; i++)
                            {
                                var badge    = parseInt(badges_points[i]);
                                badge_total += badge; 
                                
                                if( i > 0)
                                {
                                    prev_badge += parseInt(badges_points[i - 1]);
                                }

                                if( score <= badge_total )
                                {
                                    prev_score = score - prev_badge;
                                    newPercent = prev_score/badge * 100; 
                                    break;
                                }
                            }
                        }

                        newPercent        = parseInt(newPercent);   	
                        var badge_counter = 0;
                        var badge_total   = 0;
                        var prev_badge    = 0;
                        var last_badge    = false;
                        
                        console.log("id " + id);

                        jQuery(catID[id - 1]).find('.img-responsive').each(function()
                        {
                            if( !last_badge)
                            {
                                prev_badge  += badge_total;
                                badge_total = parseInt(badges_points[badge_counter]);
                                
                                if( score >= badge_total )
                                {
                                    jQuery(this).removeClass("img-inactive");
                                }
                                else 
                                {
                                    console.log("fin");
                                    last_badge = true;
                                    // score -= prev_badge; 
                                    // newPercent = score/badges_points[badge_counter] * 100;
                                    // colorear parte
                                }
                                badge_counter++;
                            }
                        });

                        category++; 
                    });
                });
            });
        }
