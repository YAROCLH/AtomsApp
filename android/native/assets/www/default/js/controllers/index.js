
/* JavaScript content from js/controllers/index.js in folder common */

/**
 * Variables Declaration
 */
		var data_index
/**
 * Events
 */
		$(document).ready(function(){
			init_index();
			devicePlatform = device.platform;
			console.log(devicePlatform)
		});
		 $(document).on('click', ".ChallengesClick",function(){
			 	setView("beforeCategories",before_js,false);
				//setView("category",category_js,false);		
		});

		$(document).on('click', ".PositionClick",function(){
				setView("yourRank",rank_js,false);
		});

		$(document).on('click', ".LevelsClick",function(){
				setView("levels",levels_js,false);
		});

		$(document).on('click', ".RulesClick",function(){
				setView("timeline",timeline_js,false);
		});
/**
 * Functions
 */
		function init_index(){
			index_js=true; 
			data_index="idUser="+encodeString(global_UserId);
			$.when(get_Data(myScore_Json,data_index)).then(function(score_data){
				$("#my_Complete").text(score_data[0].Completed);
				$("#my_Score").text(score_data[0].Position);
			 });
			 
		 }