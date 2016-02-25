
/**
 * Variables Declaration
 */
		var category_buffer;
		var img_src;
		var category_status;
		var category_CurrentCategory=1;
	
/**
 * Events
 */
		$(document).ready(function(){
			init_category(1);
		});
		$(document).on('click', ".doitClick",function(){
			var challengeId= $(this).attr('value');
			currentChallenge=challengeId;
			setView("challenge",challenge_js);
		});
	
		$(document).on('click', ".doneClick",function(){
			var challengeId= $(this).attr('value');
			$('#myModalLabel').text("Done!");
			$('#AtomsModal').modal('show');
		});
		$(document).on('click',".DetailsClickCategory",function(){
			var ChallengeDetails= $(this).attr('value');
			$('#myModalLabel').text(ChallengeDetails);
			$('#AtomsModal').modal('show');
		});
	
/**
 * Functions
 */
		function init_category(id){
			category_js=true;
			if(id!=null){	category_CurrentCategory=id;	}
			data_category="idUser="+encodeString(global_UserId)+"&idCategory="+encodeString(category_CurrentCategory);
			$.when(get_Data(Uncompleted_Json,data_category)).then(function(challenge_data){
				display_categoryData(challenge_data)	
			});
		}
		
		function display_categoryData(category_data){
		    category_buffer="<div id='PaddinMain' class='Margin'>";
			for(var i=0;i<category_data.length;i++){
				category_buffer=category_buffer+
							  '<div class="row NoPaddingLR cat" style="padding-top:5%;">'+
						   	  '<div class="col-lg-4 MenuBackgroundG"><div class="row">'+
						      '<div class="col-xs-8" style="padding:0px; heigh:100%;">';
				if(category_data[i].Status=="true"){
					img_src="./images/done.png";
					category_status="doneClick"; }
				else{
					img_src="./images/do.png";
					category_status="doitClick"; }	
				category_buffer=category_buffer+
							  '<div class="Margin"><span class="MainText2">'+category_data[i].Short+'</span></div>'+
			    			  '<div style="margin-top:10%;">'+
							  '<span class="LevelOne2 DetailsClickCategory NoPaddingLR" value="'+category_data[i].Long+'">...</span>'+
							  '</div></div>'+
			    			  '<div class="col-xs-4 text-right NoPadding"><div class="text-right;">'+
					   	      '<span class="LevelOne">+'+category_data[i].Points+'</span>'+
			    			  '<div class="text-right Margin">'+
			    			  '<img src="'+img_src+'"value="'+category_data[i].id+'"class="img-responsive '+category_status+'"/>'+
			    			  '</div></div></div></div></div></div>'
			}
			category_buffer=category_buffer+"</div>";
			$(".MainContainer").replaceWith(category_buffer);
		}
