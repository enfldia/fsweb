$(function(){
	$(".nav .menu1, .nav .menu3, .nav .menu6").hover(
		function(){
			$(this).find(".sub").addClass("over");
		},
		function(){
			$(this).find(".sub").removeClass("over");
		}
	);
});