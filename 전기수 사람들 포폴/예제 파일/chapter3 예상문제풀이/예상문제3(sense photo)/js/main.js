$(function(){
	// step1 : 메인 이미지 리사이징하는 코드입니다.
	var $window=$(window);
	var $container=$(".container");
	var $slider=$(".slider");
	var $img=$(".slider img");
	var $info=$(".info");

	function resize(){
		var w=$window.width()-250;
		// console.log("width : "+width);

		$img.css({width:w+"px"});
		// console.log("width : "+$img.width()+", height : "+$img.height());
		// console.log("height : "+$info.outerHeight());
		$container.css({"margin-bottom":$info.outerHeight(), height:$img.height()});
	}

	if($window.width()-250 > 1200){
		resize();
	}
	$(window).on("resize", function(){
		resize();
	});

	// step2 : GNB 메뉴입니다.
	$(".nav li:nth-child(2)").hover(
		function(){
			$(this).stop().find(".sub").show().animate({"left":"210px", "opacity":"1"}, 400);
		},
		function(){
			$(this).stop().find(".sub").animate({"left":"160px", "opacity":"0"}, 200, function(){
				$(this).hide();
			});
		}
	);
});