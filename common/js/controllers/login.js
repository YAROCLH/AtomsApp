
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
			var data_login=encodeString(user+":"+pass);
			$.ajax({
				url:"https://lmc2.watson.ibm.com:15036/atoms",
				type: "GET",
				headers: { 'Authorization': 'Basic '+ data_login},
				success:function(xhr){	ValidateUser(user)},
				error:	function(xhr){	DoFail(0)	}	       
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
		function ValidateUser(user){
			var data_login="intranetID="+encodeString(user);
			$.when(get_Data(Login_Json,data_login)).then(function(login_data){
				if(login_data===undefined){	
					DoFail(-1);
				}else{
					if(login_data[0].id==-1){
						DoFail(-1)
					}else{
						DoSuccess(login_data[0].id,user)
					}
				}
			});
			
		}
		function DoSuccess(userId,user){
			$(".loginContainer").remove();
			global_UserId=userId;//IntranetID AQUI***
			global_UserName=user;
			console.log(global_UserId);
			setView("index",index_js,false);		
		}
		function Save(user){
			localStorage.setItem("Remember", user);
		}
		
		
		
		
		
		
		
		