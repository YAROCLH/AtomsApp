
/* JavaScript content from js/global/GlobalController.js in folder common */
/**
 * Variables declaration
 */

/**
 * Events
 */
		document.addEventListener("backbutton", onBackKeyDown, false);
		
		function onBackKeyDown() {
			$('#AtomsModal').modal('hide');
			if( currentView=="index" || isLogin){
				exitApp();
			}
			else{
				SetLastView();
			}
		}
		
/**
 * Functions
 * 
 */		
		
		/**
		 * Set View: Loads a new HTML in the main panel
		 * @param newView:String, name of the view to load
		 * @param status: boolean, true if the view was loaded previously 
		 * @param back: boolean, true if was called by BackButton event
		 */		
		function setView(newView,status_view,backView){
			if(isValid(newView) && newView=="login"){
				$("#MainBody").load("views/AllViews/login.html");
				global_UserId=null;global_UserName=null;
				isLogin=true;
			}
			else if( isValid(newView) ){
				isLogin=false;
				$("#MainPanel").load("views/AllViews/"+newView+".html");
				pushView(newView,currentView,backView); 
			}
			loadJS(newView,status_view,backView);
			loadMenu(newView);
			currentView=newView;
		}
		
		
		/**
		 * pushView: For navigation in previous views (called from setView)
		 * @param newView: String, Name of the view to load
		 * @param currentView: String, Name of the actual view
		 * @param back: boolean, true if was called by BackButton event
		 */
		function pushView(newView,currentView,back){
			if(newView=="index"){
				prevView=[];
			}
			else{
				if((currentView != "challenge" ||currentView !="myPoints")&&(back==false||back==='undefined')){
					var aux=$.inArray(newView,prevView);
					if(aux==-1){
						prevView.push(currentView);
					}else{} 
				}else{}
			}
		}
		
		
		/**
		 * isValid: Checks if the view is not null (called from setView)
		 * @param newView: String, Name of the view to load
		 * @returns {Boolean}
		 */
		function isValid(newView){
			return (newView==null||newView==""||newView==='undefined') ? false : true ;
		}
		
		
		/**
		 * loadJs: Load the controller of the newView or initialize it again( called form setView)
		 * @param newView: String, Name of the view to load
		 * @param status_view: true if the view was loaded previously
		 */
		function loadJS(newView,status_view,back){
			if(!status_view){
				$.getScript("js/controllers/"+newView+".js");
			}
			else{
				if(newView=="category"&&back){
					recall= new Function("init_"+newView+"("+category_CurrentCategory+")");
					console.log("Category & back");
				}else{
					recall = new Function("init_"+newView+"()");

				}  
				recall();
			}
		}
		/**
		 * loadMenu: Loads the menu according to the view
		 * @param newView: String, Name of the view to load
		 */
		function loadMenu(newView){
			$("#MainPanel").swipe("disable");
			switch (newView){
			
				case "login":
					break;
				case "category":
					$("#MenuPanel").load("views/Menu/menu.html"); 
					$("#NavegacionCatego").load("views/Menu/categoryMenu.html"); 
					if ($("#MainPanel").swipe( "enable" )) { }
					loadJS("menu", menu_js);
					loadJS("categoryMenu",categoryMenu_js);
					break;
				case "challenge":
					$("#MenuPanel").load("views/Menu/challengeMenu.html"); 
					$("#NavegacionCatego").empty();
					loadJS("challengeMenu",challengeMenu_js);
					break;
				default:
					$("#MenuPanel").load("views/Menu/menu.html");
					$("#NavegacionCatego").empty();
					loadJS("menu",menu_js);
					break;
			}	
		}
		
		function SetLastView(){
			var prev=prevView.pop();
		    setView(prev,true,true);
		}
		
		function get_Data(url_json,data){
			//console.log("Data: "+data)
			var json_data;
			return $.when( 
					$.ajax({
					url:url_json,
					type: "GET",
					dataType: 'json',
				    data: data,
				    headers: { 'Authorization': 'Basic '+ DATA_LOGIN},
					success:function(json){
						//console.log("get Data Success");
						json_data=$.map(json, function(elements) {return elements});},
					error:function(jqxhr, textStatus, error ){  
						var err = textStatus + ", " + error;
				        console.log( "Request Failed: " +url_json+" Error: "+ err );}
					})).then(function(){
				  return json_data;
			  });
		}
		
		
		function encodeString(toEncode){
			var base64 =window.btoa(toEncode);
			return base64;
		}
		
	    function exitApp() {
	        navigator.notification.confirm(
	              'Exit Atoms?'
	            , function(button) {
	                  if (button == 1) {
	                      navigator.app.exitApp();
	                  } 
	              }
	            , 'Exit'
	            , 'Yes,No'
	        );  
	        return false;
	    }
	    
	    function LoadPicture(profile_pic){
	    	if(ProfilePic==null){
				var pic_url=url_ProfilePic+"?IntranetID="+encodeString(global_IntranetID);
				$.ajax({
	    		  type: "POST",
	    		  url: pic_url,
	    		  success: function(data){
		    			console.log("Loading pic");
						ProfilePic=data;		
						profile_pic.attr("src","data:image/png;base64,"+ProfilePic);	 },
	    		  headers: { 'Authorization': 'Basic '+ DATA_LOGIN}
	    		});
			}else{
				profile_pic.attr("src","data:image/png;base64,"+ProfilePic);
				console.log("Pic already loaded");
			}	
	    }

	    
