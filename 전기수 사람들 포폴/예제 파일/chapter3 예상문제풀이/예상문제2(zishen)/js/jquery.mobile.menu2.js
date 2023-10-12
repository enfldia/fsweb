(function($){
	$.fn.mobileMenuType2=function(options){
		options=$.extend({
			pcNav: "",
			mobileNav: "",
			mobileTab: "",
			mobileSize: 0,
			mask: ""
		}, options);

		return this.each(function(){
			$container=$(this);
			$pcNav=$(options.pcNav);
			$mobileNav=$(options.mobileNav);
			$mobileTab=$(options.mobileTab);
			$mask=$(options.mask);
			var status;

			$(window).resize(function(){
				var w=$(this).width();

				if(w <= options.mobileSize){
					status="mobile";
				}else{
					status="pc";
					if($mobileNav.hasClass("active") == true){
						$mobileNav.removeClass("active");
						$mobileNav.find(".sub").css({"display":"none"});
						$mask.removeClass("active");
						$container.removeClass("active");
					}
				}
			});
			$(window).trigger("resize");

			$pcNav.find("ul").hover(
				function(){
					if(status == "pc"){
						$(this).addClass("over");
					}
				},
				function(){
					if(status == "pc"){
						$(this).removeClass("over");
					}
				}
			);
			$mobileTab.click(function(e){
				e.preventDefault();
				$mobileNav.addClass("active");
				$mask.addClass("active");
				$container.addClass("active");
			});
			$mobileNav.find("a").click(function(e){
				e.preventDefault();
				if(status == "mobile"){
					if($(this).next(".sub").css("display") == "none"){
						$mobileNav.find(".sub").slideUp(300);
						$(this).next(".sub").slideDown(300);
					}else{
						$(this).next(".sub").slideUp(300);
					}
				}
			});
			$mask.click(function(){
				$mobileNav.removeClass("active");
				$mobileNav.find(".sub").css({"display":"none"});
				$mask.removeClass("active");
				$container.removeClass("active");
			});
		});
	}
})(jQuery);