$(function(){
	var status;
	var w;

	$(window).resize(function(){
		w=$(this).width();

		if(w <= 767){
			status="mobile";
		}else{
			status="PC";
			$(".gnb").removeAttr("style");
			$(".gnb .sub").hide();
		}
		// console.log("status : "+status);
	});
	$(window).trigger("resize");

	$(".gnb > li").hover(
		function(){
			if(status == "PC"){
				$(this).find(".sub").stop().slideDown(300);
			}
		},
		function(){
			if(status == "PC"){
				$(this).find(".sub").stop().slideUp(300);
			}
		}
	);
	$(".gnb > li").focusin(function(){
		if(status == "PC"){
			$(this).find(".sub").slideDown(300);
		}
	});
	$(".gnb > li .sub li:last-child").focusout(function(){
		if(status == "PC"){
			$(this).parent().slideUp(300);
		}
	});
	$(".mobile_tab").click(function(e){
		e.preventDefault();
		$(".gnb").slideToggle(300);
	});
	$(".gnb a").click(function(e){
		e.preventDefault();
		if(status == "mobile"){
			if($(this).next(".sub").css("display") == "none"){
				$(".gnb .sub").slideUp(300);
				$(this).next(".sub").slideDown(300);
			}else{
				$(this).next(".sub").slideUp(300);
			}
		}
	});
});