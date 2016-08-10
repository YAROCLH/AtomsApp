
/* JavaScript content from js/controllers/challenge.js in folder common */
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
        var selectedType;
        var newScore;
        var photo;
        var canvas,ctx;
        var comment;
/**
 * Events
 */
        $(document).ready(function(){
            init_challenge();
        });

        $(document).on("click","#CameraPhoto",function(){
            //$('#myModalLabel').text("Something Went Wrong Please Try Again Later");
            $("#btnCamara").css('display', 'block');
            $("#btnCamara").css('width', '100%');
            $("#btnGaleria").css('display', 'block');
            $("#btnGaleria").css('width', '100%');
            $('#AtomsModalCamera').modal('show');
        });

        $(document).on("click","#btnCamara",function(){
            takePicture(Camera.PictureSourceType.CAMERA);	
        });

        $(document).on("click","#btnGaleria",function(){
            takePicture(Camera.PictureSourceType.SAVEDPHOTOALBUM);	
        });

        $(document).on("click",".getMyPoints",function(){
            if(!onSubmit){
                onSubmit=true;
                DoSubmit()	
            }
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
            currentScore=0;
            currentChallenge=category_Data[selectedChallenge].id;
            selectedScore=category_Data[selectedChallenge].Points;
            selectedType=category_Data[selectedChallenge].Type;
            console.log("Challenge:"+currentChallenge+" Score: "+selectedScore+" Type: "+selectedType);
            
            if(selectedType==1)
        	{
            	console.log('Ambos');
        	}
            else if(selectedType==2)
	    		{
            		$('#commentFoto').val(' ');
            		$('#commentFoto').attr('disabled','disabled');
	    			console.log('Foto');
	    		}
            	else if(selectedType==3)
        			{
            			$('#CameraPhoto').css('display','none');
            			camera_success=true;
            			$('#buttonCam').css('display','none');
        				console.log('Texto');
        			}
        }

        function takePicture(source){
            navigator.camera.getPicture(onSucces,onFail,{
                quality: 25,
                sourceType: source,
                destinationType: destinationType.FILE_URI,
                targetWidth: 800,
                targetHeight: 600
            });
        }
		
        function onSucces(imageURI){
            console.log("cam success")
            camera_success=true;
            $("#prefoto").attr("src",imageURI);
            $("#prefoto").each(function(){
                $(this).height($(this).height() * 0.99);
            });
            photo=imageURI;
            console.log("PHOTO"+photo)
        }

        function onFail(message){
            console.log("Camera Failed: "+ message);
        }

        function DoSubmit(){
        	comment=$("#commentFoto").val();
        	if(selectedType==3)
        	{
        		
        		$.when(get_Data(MyRank_Json,"idUser="+encodeString(global_UserId))).then(function(myRank){
        			console.log("My current score"+myRank[0].Score);
                    currentScore=myRank[0].Score;
                    justText(global_UserId, currentChallenge, comment);
                });
        		
        	}else
        		{
	        		 
	                 console.log(camera_success+" "+comment+" XD");
	                 if(camera_success&&comment!=""){
	                 	$('#ProgressUp').css('display','inline');
	                     var data_myrank="idUser="+encodeString(global_UserId);
	                     $.when(get_Data(MyRank_Json,data_myrank)).then(function(myRank){
	                         currentScore=myRank[0].Score;
	                         data_user=encodeString(global_UserId);
	                         data_challenge=encodeString(currentChallenge);
	                         data_attach=encodeString(comment);
	                         uploadPhoto(photo, data_user, data_challenge,data_attach);	
	                     });
                     
                 }
                 else{
                     onSubmit=false;
                     $('#myModalLabel').text("Photo and Comment is required");
                     $('#AtomsModal').modal('show');		
                 }
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
		
        function uploadPhoto(imageURI,user,challenge,attach){
    		var options = new FileUploadOptions();
            options.fileKey="file";
			options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
			options.headers={ 'Authorization': 'Basic '+ DATA_LOGIN};
            options.mimeType="image/jpeg";
            var params = {};
            params.idUser = user;
            params.idChallenge = challenge;
            params.Attach=attach;
            params.connectionsPost = $('#myonoffswitch').is(":checked");
            options.params = params;
            var ft = new FileTransfer();
            ft.upload(imageURI, encodeURI(url_UploadImage), uploadSuccess, uploadFail, options)      
        }
        
        function justText(user, challenge, attach){
        	data_submit="idUser="+encodeString(user)+"&idChallenge="+encodeString(challenge)
        			   +"&Attach="+encodeString(comment)+"&connections="+encodeString($('#myonoffswitch').is(":checked"))
        			   +"&Photo="+"PHOTO NOT REQUIRED";
			$.when(get_Data(Submit_Json,data_submit)).then(function(challenge_data){
				if(challenge_data[0].STATUS!=-1){
					submitSuccess();	
				}else{
					submitFail();	
				}	
			}); 
        }
        
        function uploadSuccess(r){
            console.log("Upload Success");
            var res=r.response.toString();
            if(res.indexOf('1') === -1){  submitFail();	}
            else{  submitSuccess();   }	
        }

        function uploadFail(e){
            console.log("Failed to upload Photo"+e);
            submitFail();
        }
