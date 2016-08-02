var timelineCount=0;

$(document).ready(function()
{
	//$('#Loading3').css("display","none");
	init_timeline();
});

$(document).on('click', "#another",function(){
	$('#ChangingIMG').css("display","inline");
	timelineCount+=10;
	init_timeline();
});

function firstAddChallenges(o)
{
    var str = $(o).attr("date");
    var count=$(o).attr("val");
    
    var res = str.replace(/\//g, '-');
    
    $('#'+res+'2').html('');
    $('#'+res+'2').append(
    '<div id="'+res+'4" class="row">'+
			'<div class="col-xs-offset-4 col-xs-4 text-center">'+
				'<img id="loading" src="./images/menu.gif" width="100%" class="img-responsive" style="display:inline;"/>'+
			'</div>'+
	'</div>'
    );
    
    $.when(get_Data(timeline+"Page="+b64EncodeUnicode(count)+"&Date="+b64EncodeUnicode(str),"")).then(function(data)
    		{
    			console.log(data);
    			for(var i=0;i<data.length;i++)
    			{
    				var color="";
    				
    				var temp = '<li class="timeline-inverted">'+
    					          '<div class="timeline-badge warning">';
    				if(data[i].Category=="1")
    				{
    					temp = temp + '<img src="./images/clock3.png" width="90%" style="display:inline-block;" class="img-responsive"/>';
    					color="23BEE3";
    				}
    				else if(data[i].Category=="2")
    				{
    					temp = temp + '<img src="./images/people3.png" width="90%" style="display:inline-block;" class="img-responsive"/>';
    					color="0C4069";
    				}
    				else if(data[i].Category=="3")
    				{
    					temp = temp + '<img src="./images/plant3.png" width="90%" style="display:inline-block;" class="img-responsive"/>';
    					color="0D7770";
    				}
    				else if(data[i].Category=="4")
    				{
    					temp = temp + '<img src="./images/heart3.png" width="90%" style="display:inline-block;" class="img-responsive"/>';
    					color="58286F";
    				}
    				else if(data[i].Category=="5")
    				{
    					temp = temp + '<img src="./images/good3.png" width="90%" style="display:inline-block;" class="img-responsive"/>';
    					color="FCB614";
    				}
    					          
    				   temp=temp+ '</div>'+
    					          '<div class="timeline-panel">'+
    					            '<div class="timeline-heading">'+
    					              '<h4 style="font-size:12px;margin:0px;color:#454545;" class="timeline-title">'+data[i].Uname+'</h4>'+
    					            '</div>'+
    					            '<div class="timeline-body">'+
    					              '<p><span style="color:#'+color+'; font-weight:bold;">'+data[i].Cname+'.</span><br /> <span style="color:#808080">'+data[i].Time+'.</span></p>'+
    					            '</div>'+
    					          '</div>'+
    					        '</li>';
    				   
    				   $('#'+res+'2').append(temp);
    			}
    			
    			if(data.length>9)
    			{
    				console.log("Esto vale: "+data.length);
    				$('#'+res+'2').append(
    					'<div id="'+res+'button" class="row" style="padding-top:20px; padding-bottom:25px;">'+
    				    	'<div class="col-xs-12 text-center">'+
    				    		'<button onclick="make(this)" val="'+str+'" page="'+count+'" type="button" class="btn btn-danger">View More</button>'+
    				    	'</div>'+
    				    	'<br />'+
    				    	'<div id="'+res+'ChangingIMG" class="col-xs-offset-4 col-xs-4 text-center" style="display:none;">'+
    							'<img src="./images/menu.gif" width="100%" class="img-responsive" style="display:inline;"/>'+
    						'</div>'+
    				    '</div>	'
    				);
    			}
    	        $('#'+res+'4').remove();
    	    });
}
$(document).on('click', ".pullChallenges",function()
{
	
});

function make(something)
{
	var date=$(something).attr("val");
	var page=parseInt($(something).attr("page"));
	var nextPage = page+1;
	
	var str = $(something).attr("val");
    var count=parseInt($(something).attr("page"));
    
    
    var res = str.replace(/\//g, '-');
    $('#'+res+'button').remove();
    $('#'+res+'2').append(
    	    '<div id="'+res+'4" class="row">'+
    				'<div class="col-xs-offset-4 col-xs-4 text-center">'+
    					'<img id="loading" src="./images/menu.gif" width="100%" class="img-responsive" style="display:inline;"/>'+
    				'</div>'+
    		'</div>'
    	    );
    	    
    	    $.when(get_Data(timeline+"Page="+b64EncodeUnicode(count+1)+"&Date="+b64EncodeUnicode(str),"")).then(function(data)
    	    		{
    	    			console.log(data);
    	    			for(var i=0;i<data.length;i++)
    	    			{
    	    				var color="";
    	    				
    	    				var temp = '<li class="timeline-inverted">'+
    	    					          '<div class="timeline-badge warning">';
    	    				if(data[i].Category=="1")
    	    				{
    	    					temp = temp + '<img src="./images/clock3.png" width="90%" style="display:inline-block;" class="img-responsive"/>';
    	    					color="23BEE3";
    	    				}
    	    				else if(data[i].Category=="2")
    	    				{
    	    					temp = temp + '<img src="./images/people3.png" width="90%" style="display:inline-block;" class="img-responsive"/>';
    	    					color="0C4069";
    	    				}
    	    				else if(data[i].Category=="3")
    	    				{
    	    					temp = temp + '<img src="./images/plant3.png" width="90%" style="display:inline-block;" class="img-responsive"/>';
    	    					color="0D7770";
    	    				}
    	    				else if(data[i].Category=="4")
    	    				{
    	    					temp = temp + '<img src="./images/heart3.png" width="90%" style="display:inline-block;" class="img-responsive"/>';
    	    					color="58286F";
    	    				}
    	    				else if(data[i].Category=="5")
    	    				{
    	    					temp = temp + '<img src="./images/good3.png" width="90%" style="display:inline-block;" class="img-responsive"/>';
    	    					color="FCB614";
    	    				}
    	    					          
    	    				   temp=temp+ '</div>'+
    	    					          '<div class="timeline-panel">'+
    	    					            '<div class="timeline-heading">'+
    	    					              '<h4 style="font-size:12px;margin:0px;" class="timeline-title">'+data[i].Uname+'</h4>'+
    	    					            '</div>'+
    	    					            '<div class="timeline-body">'+
    	    					              '<p><span style="color:#'+color+'; font-weight:bold;">'+data[i].Cname+'.</span><br /> '+data[i].Time+'.</p>'+
    	    					            '</div>'+
    	    					          '</div>'+
    	    					        '</li>';
    	    				   
    	    				   $('#'+res+'2').append(temp);
    	    			}
    	    			
    	    			if(data.length>9)
    	    			{
    	    				console.log("Esto vale: "+data.length);
    	    				$('#'+res+'2').append(
    	    					'<div id="'+res+'button" class="row" style="padding-top:20px; padding-bottom:25px;">'+
    	    				    	'<div class="col-xs-12 text-center">'+
    	    				    		'<button onclick="make(this)" val="'+str+'" page="'+nextPage+'" type="button" class="btn btn-danger">View More</button>'+
    	    				    	'</div>'+
    	    				    	'<br />'+
    	    				    	'<div id="'+res+'ChangingIMG" class="col-xs-offset-4 col-xs-4 text-center" style="display:none;">'+
    	    							'<img src="./images/menu.gif" width="100%" class="img-responsive" style="display:inline;"/>'+
    	    						'</div>'+
    	    				    '</div>	'
    	    				);
    	    			}
    	    	        $('#'+res+'4').remove();
    	    	    });
}

function init_timeline()
{
	
	$.when(get_Data(dates,"")).then(function(data)
	{
		var temp = '';
		
		for(var i=0;i<data.length;i++)
		{
			var str = data[i].Date;
			var res = str.replace(/\//g, '-');
			
			temp+='<li class="timeline-inverted"  data-toggle="collapse" data-target="#'+res+'" >'+
				       '<div class="timeline-badge warning">'+
				        	'<img src="./images/clockDefault.png" width="90%" style="display:inline-block;" class="img-responsive">'+
					    '</div>'+
					    '<div class="timeline-panel" style="border:none;box-shadow:none;border-bottom:3px solid #eeeeee">'+
					        '<h4 val="1" style="color:#a6a6a6;" class="title2" date="'+data[i].Date+'" onclick="firstAddChallenges(this);">Challenges from '+data[i].Date+'</h4>'+
					    '</div>'+
			     '</li>'+
			     '<div id="'+res+'" class="collapse" >'+
			     	'<ul id="'+res+'2" class="timeline" style="font-size:12px; line-height: 1;" >'+
			     	'</ul>'+
			     '</div>';
		}
		
		$('#myList').append(temp);
        $('#Loading3').css("display","none");
        $('#ChangingIMG').css("display","none");
    });
  
}

function b64EncodeUnicode(str)
{
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}