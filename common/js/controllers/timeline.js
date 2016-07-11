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
  
function init_timeline()
{
	
	$.when(get_Data(timeline+b64EncodeUnicode(timelineCount),"")).then(function(data)
	{
		
		for(var i=0;i<data.length;i++)
		{
			var temp = '<li class="timeline-inverted">'+
				          '<div class="timeline-badge warning">';
			if(data[i].Category=="1")
			{
				temp = temp + '<img src="./images/clock3.png" width="90%" style="display:inline-block;" class="img-responsive"/>';
			}
			else if(data[i].Category=="2")
			{
				temp = temp + '<img src="./images/people3.png" width="90%" style="display:inline-block;" class="img-responsive"/>';
			}
			else if(data[i].Category=="3")
			{
				temp = temp + '<img src="./images/plant3.png" width="90%" style="display:inline-block;" class="img-responsive"/>';
			}
			else if(data[i].Category=="4")
			{
				temp = temp + '<img src="./images/heart3.png" width="90%" style="display:inline-block;" class="img-responsive"/>';
			}
			else if(data[i].Category=="5")
			{
				temp = temp + '<img src="./images/good3.png" width="90%" style="display:inline-block;" class="img-responsive"/>';
			}
				          
			   temp=temp+ '</div>'+
				          '<div class="timeline-panel">'+
				            '<div class="timeline-heading">'+
				              '<h4 style="font-size:12px;" class="timeline-title">'+data[i].Uname+'</h4>'+
				            '</div>'+
				            '<div class="timeline-body">'+
				              '<p>'+data[i].Cname+'.<br /> '+data[i].Time+' of '+data[i].Date+'.</p>'+
				            '</div>'+
				          '</div>'+
				        '</li>';
			   
			   $('#myList').append(temp);
		}
		if(data.length<9)
		{
			$('#another').css("display","none");
		}
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