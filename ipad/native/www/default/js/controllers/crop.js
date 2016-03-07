
/* JavaScript content from js/controllers/crop.js in folder common */

/**
 * Variables Declaration
 */
	// Image & Canvas
		var jcrop,
		 	img_src,
		 	imageObj,
		 	context,
		 	canvas;
	// Size of elements & Scale
		var window_w,
			window_h,
			scale_w,
			scale_h,
			cropHolder_h,
			crop_w,
			crop_h;	
	// Crop with Canvas
		var coord,
			sourceX,
			sourceY,
			sourceW,
			sourceH,
			destX,
			destY,
			destW,
			destH;
/**
 * Events
 */
		$("#done").on("click",function(){crop()});
		$(document).ready(function(){
			init_crop();
		});
  
/**
 * Functions
 */
	
		function init_crop(){
			crop_js=true;
			$.when(setImage()).then(function(){
				window_w=$(window).width();// w and h of the screen
				window_h=$(window).height();
				scale_w=imageObj.width/window_w; //Scale of the screen in regard to the 800 x 600  final image
				scale_h=imageObj.height/window_h;
				cropHolder_h=getPercent(window_h);//height of the crop holder in screen
				crop_w=getPercent(window_w);//the % of the image to crop actual is 2/3
				crop_h=getPercent(cropHolder_h);
				$("#target").attr({src:img_src, width:window_w, height:cropHolder_h});
				$("#final").hide();  $("#myCanvas").hide();
				$('#target').Jcrop({ allowResize:false, allowSelect:false},
					function(){
						jcrop=this;
						jcrop.animateTo([0,0,crop_w,crop_h]);//size for the crop area x1:0,y1:0 & x2, y2
					});
			});
			
		}
		
		function setImage(src){
			img_src="./images/Desert.jpg";
			imageObj = new Image();
			imageObj.src =img_src;	
		}
		
		function crop() {
			canvas= document.getElementById('myCanvas');
			context = canvas.getContext('2d');
			coord=jcrop.tellSelect();
			sourceX = coord.x*scale_w; //start crop from coord x  //X1
			sourceY = ((coord.y*3)/2)*scale_h;//crop coord y              //Y1
			sourceW = coord.w*scale_w;// cropped area x       //X2-X1
			sourceH = ((coord.h*3)/2)*scale_h;// cropped area y      //Y2-Y1
			destX = 0;//place in canvas at x
			destY =0;//place in canvas at y
			destW = 800;//draw in canvas w
			destH =600;// draw in canvas h
			context.drawImage(imageObj, sourceX, sourceY, sourceW, sourceH, destX, destY, destW, destH);
			$(".jcrop-holder").hide();
			saveAsImage();
		}
		
		function saveAsImage(){
		    var dataurl = canvas.toDataURL("image/png");
		    $("#final").attr("src",dataurl);
		    $("#final").attr({
		    	width: window_w,
		    	height:cropHolder_h });
		    $("#final").show();
		}
		
		// the actual scale is  2/3
		function getPercent(value){
			value=(value/3)*2;
			return value;
		}
	
		function revertPercent(value){
			value=(value*3)/2;
		}
		