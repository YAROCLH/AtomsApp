
/* JavaScript content from js/controllers/category.js in folder common */

/**
 * Variables Declaration
 */
		var category_buffer;
		var img_src;
		var category_status;
		var selectedChallenge=0;
		var category_Data;
		var challenge_type;
/**
 * Events
 */
        $(document).ready(function(){
        	category_js=true;
        });

        $(document).on('click', ".doitClick",function(){
            selectedChallenge = $(this).attr('value');
            setView("challenge",challenge_js,false);
        });

        $(document).on('click', ".doneClick",function(){
            $('#myModalLabel').text("Done!");
            $('#AtomsModal').modal('show');
        });

		/*$(document).on('click',".DetailsClickCategory",function(){
			var ChallengeDetails= $(this).attr('value');
			$("#myModalLabel").text(ChallengeDetails);
			$("#AtomsModal").modal('show');
		});
	
/**
 * Functions
 */
        function DetailsChallenges(value){
            $("#myModalLabel").text(value);
            $("#AtomsModal").modal('show');
        }

        function init_category(id){
        	if(id!=null||id!=""){category_CurrentCategory=id;}
        	console.log("Category "+id);
            data_category="idUser="+encodeString(global_UserId)+"&idCategory="+encodeString(category_CurrentCategory);
            $.when(get_Data(Uncompleted_Json,data_category)).then(function(challenge_data){
                display_categoryData(challenge_data)	
            });
        }
		
		function display_categoryData(category_data){
			category_Data=category_data;
		    category_buffer="<div id='PaddinMain' class='Margin'>";
		    var elements = 0; 
			for(var i=0;i<category_data.length;i++){
				category_buffer=category_buffer+
							  '<div class="row  cat" style="padding-top:5%; margin:0px;">'+
						   	  '<div class="col-lg-4 MenuBackgroundG"><div class="row">'+
						      '<div class="col-xs-8" style="padding:0px; heigh:100%;">';
				if(category_data[i].Status=="true"){
					img_src="./images/done.png";
					category_status="doneClick"; 
				}
				else{
					img_src="./images/do.png";
					category_status="doitClick"; 
				}	
				category_buffer=category_buffer+
							  '<div class="Margin"><span class="MainText2">'+category_data[i].Short+'</span></div>'+
			    			  '<div style="margin-top:10%;">'+
							  '<label onclick="DetailsChallenges(\''+category_data[i].Long+'\');" class="LevelOne2 DetailsClickCategory NoPaddingLR" value="'+category_data[i].Long+'">&nbsp;&nbsp;...&nbsp;&nbsp;</label>'+
							  '</div></div>'+
			    			  '<div class="col-xs-4 text-right NoPadding"><div class="text-right;">'+
					   	      '<span class="LevelOne">+'+category_data[i].Points+'</span>'+
			    			  '<div class="text-right Margin">'+
			    			  '<img src="'+img_src+'"value="'+i+'"class="img-responsive '+category_status+'"/>'+
			    			  '</div></div></div></div></div></div>'
			    elements = elements + 1;
			}
			
			category_buffer=category_buffer+"</div>";
			$(".MainContainer").replaceWith(category_buffer);
			
		    if(elements == 0){
		    	$("#PaddinMain").css('padding', '35%');
		    	$("#PaddinMain").css('padding-bottom', '100%');
		    }
		    else{
		    	$("#PaddinMain").css('padding', '5%');
		    	if(elements == 1){
			    	$("#PaddinMain").css('padding-bottom', '90%');
			    }
			    else if(elements == 2){
			    	$("#PaddinMain").css('padding-bottom', '50%');
			    }
			    else{
			    	$("#PaddinMain").css('padding-bottom', '5%');
			   	}
		    }
		}
