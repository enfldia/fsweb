(function($){
	$.fn.mobileMenuType1=function(options){
		options=$.extend({
			mobileTab: ""
		}, options);

		return this.each(function(){
			var $gnb=$(this);
			var status;
			$gnb.find(".sub").css({"display":"none"});

			$(window).resize(function(){
				var w=$(this).width();

				if(w <= 767){
					status="mobile";
				}else{
					status="pc";
					$gnb.removeAttr("style");
					$gnb.find(".sub").each(function(){
						if($(this).css("display") == "block"){
							$(this).css({"display":"none"});
						}
					});
				}
			});
			$(window).trigger("resize");

			$gnb.children("li").hover(
				function(){
					if(status == "pc"){
						$(this).find(".sub").slideDown(300);
					}
				},
				function(){
					if(status == "pc"){
						$(this).find(".sub").slideUp(300);
					}
				}
			);
			$(options.mobileTab).click(function(e){
				e.preventDefault();
				$gnb.slideToggle(300);
				if($gnb.find(".sub").css("display") == "block"){
					$gnb.find(".sub").slideUp(300);
				}
			});
			$gnb.find("a").click(function(e){
				e.preventDefault();
				if(status == "mobile"){
					if($(this).next(".sub").css("display") == "none"){
						$gnb.find(".sub").slideUp(300);
						$(this).next(".sub").slideDown(300);
					}else{
						$(this).next(".sub").slideUp(300);
					}
				}
			});
		});
	}
})(jQuery);