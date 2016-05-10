
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
    
/**
 * Functions
 */
        function nextCategory()
        {
            if(CM_counter > 1 && CM_counter <= CM_categoryData.length){
                CM_counter--;
                $("#CategoryName").html(CM_categoryData[CM_counter-1].Name);
                setCategory(CM_counter);
                $("#derecha").css("display","inline");	
               
            }
            else
            {
                $("#izquierda").css("display",'none');
            }
        }

        function previousCategory()
        {
        	 
            if(CM_counter > 0 && CM_counter < CM_categoryData.length){
                CM_counter++;
                $("#CategoryName").html(CM_categoryData[CM_counter-1].Name);
                $("#izquierda").css("display",'inline');
                setCategory(CM_counter);	
            }
            else
            {
                $("#derecha").css("display",'none');
            }
        }

		function init_categoryMenu(){
			categoryMenu_js=true;
			$.when(get_Data(Categories_Json)).then(function(category_data){
				CM_categoryData=category_data;
				CM_counter=category_CurrentCategory;
				$("#CategoryName").html(CM_categoryData[CM_counter-1].Name);
			});
		}
		
		function setCategory(idCategory){
			$("#MainPanel").load("views/AllViews/category.html",function(){
				category_CurrentCategory=idCategory;
				init_category(idCategory);
			});
		}
		
