
/**
 * Variables Declaration
 */

/**
 * Events
 */
		$(document).ready(function() {
			init_badges();
			setBadgePercentage();
		});
		
		$(document).on('click', "#status",function(){
				setView("status", status_js);
		});
  
/**
 * Functions
 */
		function init_badges(){
			badges_js=true;
		}

        function setBadgePercentage()
        {

			$.when(get_Data(Badges_Json)).then(function(badges_data)
            {
                //var badges_points = badges_data;
                // console.log("badges obtenidos");
                var badges_points = [badges_data[0].L1, badges_data[0].L2, badges_data[0].L3, badges_data[0].L4];
                // console.log("total del badge " + badges_points.length);
                var data_status = "idUser="+encodeString(global_UserId);
                var categories, score, newPercent;
                
                /*
                 var badges_points = [];
                 for(var i in badges_data[0])
                 {
                    badges_points.add(parseInt(i));
                 }
                 **/

                $.when(get_Data(Status_Json,data_status)).then(function(status_data)
                {
                    // console.log("status obtenido");

                     categories           = status_data;
                    var number_categories = categories.length;
                    var category          = 0;
                    var catID             = ['#Cat1', '#Cat2', '#Cat3', '#Cat4', '#Cat5' ];
                    var catID_counter     = 0;

                    jQuery('.title5').each(function()
                    {
                        // console.log("categoria #" + category);
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
                            
                            // console.log("score " + score);
                            
                            for(var i = 0; i < badges_points.length; i++)
                            {
                                // console.log("Iteracion " + i);
                                // console.log("puntos del badge " + badges_points[i]);
                                var badge    = parseInt(badges_points[i]);
                                badge_total += badge; 
                                
                                if( i > 0)
                                {
                                    prev_badge += parseInt(badges_points[i - 1]);
                                }

                                // console.log("Total Badges    " + badge_total );
                                // console.log("Total preBadges " + prev_badge);
                                if( score <= badge_total )
                                {
                                    prev_score = score - prev_badge;
                                    newPercent = prev_score/badge * 100; 
                                    // console.log("prev_score " + prev_score);
                                    // console.log("newPercent " + newPercent);
                                    break;
                                }
                            }
                        }

                        newPercent        = parseInt(newPercent);   	
                        var badge_counter = 0;
                        var badge_total   = 0;
                        var last_badge    = false;
                        // console.log("Cat ID " + catID[category]); 
                        // console.log("Score " + score);

                        jQuery(catID[category]).find('.img-responsive').each(function()
                        {
                            if( !last_badge )
                            {

                                // console.log("iteracion de imagenes #" + badge_counter);
                                // console.log("no ha terminado de colorear");
                                // console.log("Puntos de badge " + badges_points[badge_counter]); 
                                badge_total += parseInt(badges_points[badge_counter]);

                                // console.log("Total " +badge_total + " hasta " + badge_counter);

                                if( score > badge_total )
                                {
                                    //jQuery(this).removeClass
                                    // colorea todo
                                    jQuery(this).removeClass("img-inactive", 500);
                                }
                                else 
                                {
                                    last_badge = true;
                                     
                                    // colorea con newpersent
                                }
                                badge_counter++;
                            }
                        });

                        category++; 
                    });
                });
            });
        }
