
/**
 * Variables Declaration
*/

			//var Server="http://atomsservice.mybluemix.net/Service/",
			var Server="http://localhost:9080/liberty-HelloWorld/Service/"
			Login_Json=Server+"Login",
			myScore_Json=Server+"Score",
			Uncompleted_Json=Server+"Challenges",
			Status_Json=Server+"Status",
			TopRank_Json=Server+"Top10",
			MyRank_Json=Server+"Rank",
			Categories_Json=Server+"Categories",
			Submit_Json=Server+"SubmitChallenge";
            Badges_Json=Server+"Badges";
            url_UploadImage=Server+"Submit"

		//Device OS
		var devicePlatform;
		
		//Navigation variables
		var currentView="",
			lastView="";
		var prevView=[];
		var currentChallenge;
		var isLogin;
		//used for only load the js controllers once
		var index_js=false,
			challenge_js=false,
			badges_js=false,
			category_js=false,
			rank_js=false,
			categoryMenu_js=false,
			challengeMenu_js=false,
			menu_js=false,
			status_js=false,
			crop_js=false,
			login_js=false,
			myPoints_js=false;
		
		//User Data
		var global_UserId;
		var global_UserName;
		
		// used to init a controller when the view is set again
		var recall;
		var category_CurrentCategory=1;
