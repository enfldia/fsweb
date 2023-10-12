$(function(){
	/********** scroll moving **********/
	var goPage;
	var topPos;
	var w;
	var t;
	var n=0;
	var menuGap=20;

	$("nav a").click(function(e){
		e.preventDefault();
		$("nav a").removeClass("on");
		$(this).addClass("on");

		goPage=$(this).attr("href");
		if(goPage == ""){
			goPage="body";
		}
		topPos=$(goPage).offset().top;
		$("html, body").animate({scrollTop:topPos}, 800);

		if(w <= 780 && $(".nav_menu").hasClass("show")){
			$(".nav_menu").removeClass("show").slideUp(400);
		}
	});
	$(window).resize(function(){
		w=$(this).width();

		if(w > 780){
			$(".nav_menu").removeAttr("style");
		}
	});
	$(window).scroll(function(){
		t=$(this).scrollTop();
		// console.log("t : "+t);

		if(t > 120){
			if($(".mobile").hasClass("show") == false){
				$(".mobile").addClass("show");
			}
		}else{
			$(".mobile").removeClass("show");
		}
		if(t <= $("#subject").offset().top-menuGap){
			n=0;
		}else if(t <= $("#portfolio").offset().top-menuGap){
			n=1;
		}else if(t <= $("#info").offset().top-menuGap){
			n=2;
		}else{
			n=3;
		}

		$(".pc nav a").removeClass("on");
		$(".pc nav li").eq(n).find("a").addClass("on");
		$(".mobile nav a").removeClass("on");
		$(".mobile nav li").eq(n).find("a").addClass("on");
	});

	$(window).trigger("resize");
	$(window).trigger("scroll");


	/********** menu ui **********/
	$(".menu_icon").click(function(e){
		e.preventDefault();
		// $(this).toggleClass("on");
		if($(this).next(".nav_menu").hasClass("show") == false){
			$(this).next(".nav_menu").addClass("show");
			$(this).next(".nav_menu").slideDown(400);
		}else{
			$(this).next(".nav_menu").removeClass("show");
			$(this).next(".nav_menu").slideUp(400);
		}
	});


	/********** owl carousel plugins **********/
	var owl=$("#owl");

	owl.owlCarousel({
		navigation: true,
		singleItem: true,
		transitionStyle : "fadeUp",
		autoPlay: true
	});
	$("#transitionType").change(function(){
		var newValue=$(this).val();
		console.log(newValue);
		owl.data("owlCarousel").transitionTypes(newValue);
		owl.trigger("owl.next");
	});


	/********** preload plugins **********/
	$("body").preload(function(){
		var timer=setTimeout(function(){
			$(".preloading").fadeOut(200);
			$("body").show();
			clearTimeout(timer);
		}, 2000);
	});
});