$(function(){
	$("#menu_icon").click(function(e){
		e.preventDefault();
		$("#nav_menu").toggleClass("show_menu");
	});
	$(window).resize(function(){
		var w=$(this).width();

		if(w > 800){
			if($("#nav_menu").hasClass("show_menu")){
				$("#nav_menu").removeClass("show_menu");
			}
		}
	});
});