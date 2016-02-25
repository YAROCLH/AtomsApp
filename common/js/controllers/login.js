
/**
 * Variables Declaration
 */
		var Remember=false;
		var ToSave;
/**
 * Events
 */		
		$(document).ready(function(){
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
			var result=localStorage.getItem("Remember");
			if(result==null){
				$("#UserId").val("")
			}else{
				var text=result+"";
				$("#UserId").val(text);	
			}
			
		}
		
		function DoLogin(user,pass){
			var data_login="UserName="+encodeString(user)+"&UserPass="+encodeString(pass);
			$.when(get_Data(Login_Json,data_login)).then(function(login_data){
				if(login_data[0].id==0){	
					DoFail(0);
				}else{
					if(login_data[0].id==-1){
						DoFail(-1)
					}else{
						
						if($("#RememberCheck").is(':checked')){	
							Save(user);
						}else{}
						$(".loginContainer").remove();
						$.when(DoSuccess(login_data)).then(function(){
							setView("index",index_js,false);
						});		 }
				}
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
		
		function DoSuccess(login_data,user){
			global_UserId=login_data[0].id;
			global_UserName=login_data[0].Name;		
		}
		function Save(user){
			localStorage.setItem("Remember", user);
		}
		
		
				 
		
		
		
		
		