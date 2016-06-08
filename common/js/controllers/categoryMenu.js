
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
            if(CM_counter > 1 && CM_counter <= CM_categoryData.length)
            {
                CM_counter--;
                $("#CategoryName").html(CM_categoryData[CM_counter-1].Name);
                setCategory(CM_counter);
                ValidateCM(CM_counter,CM_categoryData.length);               
            }
            else
            {
                // $("#izquierda").css("display",'none');
            }
        }

        function previousCategory()
        {
            if(CM_counter > 0 && CM_counter < CM_categoryData.length)
            {
                CM_counter++;
                $("#CategoryName").html(CM_categoryData[CM_counter-1].Name);
                setCategory(CM_counter);
                ValidateCM(CM_counter,CM_categoryData.length);
            }
            else
            {
                // $("#derecha").css("display",'none');
            }
        }
        
        function ValidateCM(counter,max)
        {
            if(counter==max)
            {
                console.log("last Catego");
                $("#derecha").css("display",'none');
                $("#izquierda").css("display",'inline');
            }
            else if(counter==1)
            {
                console.log("first Catego");
                $("#izquierda").css("display",'none');
                $("#derecha").css("display",'inline');
            }
            else
            {
                $("#izquierda").css("display",'inline');
                $("#derecha").css("display",'inline');
            }
        }
        
        function init_categoryMenu()
        {
            categoryMenu_js=true;
            $.when(get_Data(Categories_Json)).then(function(category_data){
                CM_categoryData=category_data;
                CM_counter=category_CurrentCategory;
                ValidateCM(CM_counter,CM_categoryData.length);
                $("#CategoryName").html(CM_categoryData[CM_counter-1].Name);
            });
        }

        function setCategory(idCategory){
            $("#MainPanel").load("views/AllViews/category.html",function(){
                category_CurrentCategory=idCategory;
                init_category(idCategory);
            });
        }
		
