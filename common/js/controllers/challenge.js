
/**
 * Variables Declaration
 */
		var destinationType=navigator.camera.DestinationType;
		var source= navigator.camera.SourceType;
		var camera_success=false;
		var data_submit;
		var onSubmit=false;
/**
 * Events
 */
		$(document).ready(function(){
			init_challenge();
		});
		$(document).on("click","#CameraPhoto",function(){
			takePicture()	});
		$(document).on("click",".getMyPoints",function(){
			if(!onSubmit){
				onSubmit=true;
				DoSubmit()	}
			else{
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
		}
		
		function onFail(message){
			 console.log("Camera Failed: "+ message);
		}
		
		function DoSubmit(){
			var comment=$("#commentFoto").val();
			if(camera_success&&comment!=""){
				data_submit="idUser="+encodeString(global_UserId)+"&idChallenge="+encodeString(currentChallenge)+
							"&Attach="+encodeString(comment)+"&Photo="+encodeString("NO PHOTO BY NOW");
			$.when(get_Data(Submit_Json,data_submit)).then(function(challenge_data){
				if(challenge_data[0].STATUS==1){
					submitSuccess();
				}else{
					submitFail();	}	
			});
			}else{
				onSubmit=false;
				$('#myModalLabel').text("Photo and Comment is required");
				$('#AtomsModal').modal('show');
				
			}
		}
		
		function submitSuccess(){
			category_CurrentCategory=1;
			$('#myModalLabel').text("Challenge Completed");
			$('#AtomsModal').modal('show');
			setView("category",true,true);
		}
		
		function submitFail(){
			$('#myModalLabel').text("Something Went Wrong Please Try Again Later");
			$('#AtomsModal').modal('show');
			setView("category",true,true);
		}
		
		
		
		