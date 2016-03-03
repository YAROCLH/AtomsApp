
/* JavaScript content from js/controllers/categoryMenu.js in folder common */

/**
 * Variables Declaration
 */
		var CM_counter = 1;
		var CM_categoryData;
/**
 * Events
 */
		$(document).ready(function(){
			init_categoryMenu();
		});
		
		$(function() 
        {      
            $("#MainPanel").swipe( 
            {
            	swipe:function(event, direction, distance, duration, fingerCount, fingerData) 
                {
                    if(direction === "right") 
                    {
                        if(CM_counter > 1 && CM_counter <= CM_categoryData.length)
                        {
                            CM_counter--;
                            $("#CategoryName").html(CM_categoryData[CM_counter-1].Name);
                            setCategory(CM_counter);
                            $("#derecha").html("&#62;&#62;");	
                        }
                        else
                        {
                            $("#izquierda").html("&nbsp;");
                        }
                    }
                    else if(direction === "left")
                    {
                        if(CM_counter > 0 && CM_counter < CM_categoryData.length)
                        {
                            CM_counter++;
                            $("#CategoryName").html(CM_categoryData[CM_counter-1].Name);
                            $("#izquierda").html("&#60;&#60;");
                            setCategory(CM_counter);	
                        }
                        else
                        {
                            $("#derecha").html("&nbsp;");
                        }
                    }
                },

                threshold:0
            });
        });
/**
 * Functions
 */
		function init_categoryMenu(){
			categoryMenu_js=true;
			$.when(get_Data(Categories_Json)).then(function(category_data){
				CM_categoryData=category_data;
				CM_counter=1;
				$("#CategoryName").html(CM_categoryData[CM_counter-1].Name);
			});
		}
		
		function setCategory(idCategory){
			$("#MainPanel").load("views/AllViews/category.html",function(){
				init_category(idCategory);
			});
		}
		
