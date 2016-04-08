
/**
 * Variables Declaration
 */
		var destinationType=navigator.camera.DestinationType;
		var source= navigator.camera.SourceType;
		var camera_success=false;
		var data_submit;
		var onSubmit=false;
		var currentScore;
		var curentChallenge;
		var selectedScore;
		var newScore;
/**
 * Events
 */
		$(document).ready(function(){
			init_challenge();
		});

		$(document).on("click","#CameraPhoto",function(){
			takePicture()	
		});

		$(document).on("click",".getMyPoints",function(){
			if(!onSubmit){
				onSubmit=true;
				DoSubmit()	
			}else{
				console.log("Already Submitted");
			}
		});
  
/**
 * Functions
 */
		function init_challenge(){
			challenge_js=true;
			onSubmit=false;
			camera_success=false;
			currentScore=0;
			currentChallenge=category_Data[selectedChallenge].id;
			selectedScore=category_Data[selectedChallenge].Points;
			console.log("Challenge:"+currentChallenge+" Score: "+selectedScore);
		}
		
		function takePicture(){
			navigator.camera.getPicture(onSucces,onFail,{
                quality: 25, 
                sourceType: source,
                destinationType: destinationType.FILE_URI
			});
		}
		
		function onSucces(image_uri){
			camera_success=true;
			$("#prefoto").attr("src",image_uri);
			
			$("#prefoto").each(function(){
			  $(this).height($(this).height() * 0.99);
            });
		}
		
		function onFail(message){
			 console.log("Camera Failed: "+ message);
		}
		
		function DoSubmit(){
			var comment=$("#commentFoto").val();
			if(camera_success&&comment!=""){
				var data_myrank="idUser="+encodeString(global_UserId);
				$.when(get_Data(MyRank_Json,data_myrank)).then(function(myRank){
					currentScore=myRank[0].Score;
					data_submit="idUser="+encodeString(global_UserId)+"&idChallenge="+encodeString(currentChallenge)+
					"&Attach="+encodeString(comment)+"&Photo="+encodeString("NO PHOTO BY NOW");
					$.when(get_Data(Submit_Json,data_submit)).then(function(challenge_data){
						if(challenge_data[0].STATUS==1){
							submitSuccess();
						}
						else{
							submitFail();	
						}	
					});
				});
			}
			else{
				onSubmit=false;
				$('#myModalLabel').text("Photo and Comment is required");
				$('#AtomsModal').modal('show');		
			}
		}
		
		function submitSuccess(){
			setView("myPoints",myPoints_js,true);
		}
		
		function submitFail(){
			$('#myModalLabel').text("Something Went Wrong Please Try Again Later");
			$('#AtomsModal').modal('show');
			setView("category",true,true);
		}
		
		
		
		
		
		
