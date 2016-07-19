
/**
 * Variables Declaration
*/

		//var Server="http://localhost:9080/liberty-HelloWorld/Service/",
		//var Server="https://lmc2.watson.ibm.com:15036/atoms/",
		var Server="https://lmc2.watson.ibm.com:15036/atomes/Service/",
            ProcServer="https://lmc2.watson.ibm.com:15036/atoms/",
            TestServer="https://lmc2.watson.ibm.com:15036/atomes/",
            Test=0,
			Login_Json=Server+"Login",
			myScore_Json=Server+"Score",
			Uncompleted_Json=Server+"Challenges",
			Status_Json=Server+"Status",
			TopRank_Json=Server+"Top10",
			MyRank_Json=Server+"Rank",
			Categories_Json=Server+"Categories",
			Submit_Json=Server+"SubmitChallenge",
            Badges_Json=Server+"Badges",
            url_ProfilePic=Server+"Profile",
            url_UploadImage=Server+"Submit",
            version=Server+"Version",
            timeline=Server+"TimeLine?",
            dates=Server+"Date",
            url_validate=Server+"Validate";
			
		var VersionApp = 17;

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
			rules_js=false,
			levels_js=false,
			status_js=false,
			crop_js=false,
			login_js=false,
			myPoints_js=false;
		
		//User Data
		var global_UserId;
		var global_UserName;
		var global_IntranetID;
		var ProfilePic=null;

		// used to init a controller when the view is set again
		var recall;
		var category_CurrentCategory=1;
		var categoryIntro=0;