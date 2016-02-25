
/**
 * Variables Declaration
 */
		var rank_buffer="";
		var rank_header;
		var rank_myData;
		var rank_inTop=false;
		var rank_topPosition;
		var rank_ActiveRed;
/**
 * Events
 */
		$(document).ready(function(){
			init_yourRank();
		});
		
/**
 * Functions
 */
		function init_yourRank(){
			rank_js=true;
			var data_myrank="idUser="+encodeString(global_UserId);
			$.when(get_Data(TopRank_Json)).then(function(topRank){
				$.when(get_Data(MyRank_Json,data_myrank)).then(function(myRank){
					rank_inTop=false;
					fillData(topRank,myRank);
				});
			});
		}
		
		function fillData(topRank,myRank){
			rank_buffer="";
			rank_myData=$("#myData").clone();
			rank_header=$("#rank_header").clone();
		    for (var i=0;i<topRank.length;i++){
	    		rank_ActiveRed=""
		    	if(topRank[i].Name==global_UserName){
		    		rank_inTop=true;
		    		rank_ActiveRed="ActiveRed"
		    	}
			   rank_buffer=rank_buffer+
			   				 '<div class="row '+rank_ActiveRed+'"><div class="col-xs-2 text-center NoPaddingLR">'+
			   				 '<span class="title5 '+rank_ActiveRed+'"><strong>'+topRank[i].Position+'</strong></span></div>'+
			   				 '<div class="col-xs-7 text-left NoPaddingLR"><span class="title5 '+rank_ActiveRed+'">'+topRank[i].Name+'</span></div>'+
			   				 '<div class="col-xs-3 text center NoPaddingLR"><span class="title5 AppColor '+rank_ActiveRed+'">'+topRank[i].Score+'</span></div></div>'
		   } 
		   $("#container").replaceWith('<div class="row" style="padding:7%; padding-top:0px;" id="container"></div>');
		   displayData(myRank);
		}
		
		function displayData(myRank){
			$("#container").append(rank_header);
			$("#container").append(rank_buffer);
			$("#myRank").text(myRank[0].myPosition);
			if(!rank_inTop){
				$("#container").append(rank_myData);
				$("#myRankNumber").text(myRank[0].myPosition);
				$("#myScore").text(myRank[0].Score);
				$("#myName").text(global_UserName)
			}
			
		}
		
		
