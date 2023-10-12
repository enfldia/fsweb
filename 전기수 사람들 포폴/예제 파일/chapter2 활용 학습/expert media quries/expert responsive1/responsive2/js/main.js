$(function(){
	var isIE_8=(navigator.userAgent.toLowerCase().indexOf("msie 8") != -1);
	var isIE_9=(navigator.userAgent.toLowerCase().indexOf("msie 9") != -1);
	//console.log("isIE_8 : "+isIE_8+", isIE_9 : "+isIE_9);

	if(isIE_8 || isIE_9){
		$(".box > a").hover(
			function(){
				$(this).find(".description").animate({top:0}, 500);
			},
			function(){
				$(this).find(".description").animate({top:"100%"}, 500);
			}
		);
	}
});