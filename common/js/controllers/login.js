
/**
 * Variables Declaration
 */
		var Remember=false;
		var ToSave;
		var DATA_LOGIN;
/**
 * Events
 */		
		$(document).ready(function(){
            Test = 0;
            Server = (Test == 0) ? ProcServer : TestServer; 

			init_login();
		});


		$(document).on('click', ".Login",function(){
			var Login_id=$("#UserId").val();
			var Login_pass=$("#Password").val();
			DoLogin(Login_id,Login_pass);
		});
  
/**
 * Functions
 */
		
		function init_login(){
			login_js=true;
			$.when(localStorage.getItem("Remember")).then(function(result){
				console.log(result)
				if(result==null){
					$("#UserId").val("")
				}else{
					$("#UserId").val(result);	
				}
				
			});
		}
		
		function DoLogin(user,pass){
			console.log('de menos llego aquii: '+user);
			if($("#RememberCheck").is(':checked'))
			{
				console.log('entro aqui: '+user);
				Save(user);
			}
			
			DATA_LOGIN=encodeString(user+":"+pass);
			$.ajax({
				url:"https://lmc2.watson.ibm.com:15036/atoms",
				type: "GET",
				headers: { 'Authorization': 'Basic '+ DATA_LOGIN},
				success:function(xhr){	ValidateUser(user)},
				error:	function(xhr){	console.log("Login Failed"+xhr.status);
					DoFail(0)	}	       
			});
			
			
			
		}
		
		function DoFail(ErrCode){
			if(ErrCode==0){
				$("#Password").val("");
				$('#myModalLabel').text("User Not Found or Wrong Password");
				$('#AtomsModal').modal('show');
			}else if(ErrCode==-1){
				$('#myModalLabel').text("Something Went Wrong Please Try Again Later");
				$('#AtomsModal').modal('show');
			}
			
		}
		function ValidateUser(IntranetID){
			var data_login="intranetID="+encodeString(IntranetID);
			$.when(get_Data(Login_Json,data_login)).then(function(login_data){
				if(login_data===undefined){	
					DoFail(-1);
				}else{
					if(login_data[0].id==-1){
						DoFail(-1)
					}else{
						DoSuccess(login_data[0].id,IntranetID,login_data[0].DisplayName);
					}
				}
			});
			
		}
		function DoSuccess(userId,IntranetID,name){
			$(".loginContainer").remove();
			global_UserId=userId;
			global_IntranetID=IntranetID;/// este es el intranet id 
			global_UserName=name; // aqui debe ir el nombre
			setView("index",index_js,false);	
			
				
		}
		function Save(user){
			localStorage.setItem("Remember", user);
		}
		